"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface ThreadsProps {
	amplitude?: number;
	distance?: number;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform float uAmplitude;
uniform float uDistance;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float pixel(float count, vec2 resolution) {
    return 1.0 / max(resolution.x, resolution.y) * count;
}

float Perlin2D(vec2 P)
{
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y) * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950488016887242097;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float line(vec2 st, float width, float perc, float offset) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;
    
    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float amplitude = amplitude_normal * amplitude_strength * uAmplitude;

    float time_scaled = iTime / 10.0;
    
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * uDistance + xnoise / 2.0 * amplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );
        
    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );
    
    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord / iResolution.xy;
    
    float line_strength = 1.0;

    for (int i = 0; i < u_line_count; i++) {
        line_strength *= (1.0 - line(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - float(i) / float(u_line_count)),
            float(i) / float(u_line_count),
            (PI * 1.0) * float(i) / float(u_line_count)
        ));
    }
    
    float color = 1.0 - line_strength;
    fragColor = vec4(color, color, color, color);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads: React.FC<ThreadsProps> = ({ amplitude = 1, distance = 0, ...rest }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const animationFrameId = useRef<number>(0);

	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;

		const renderer = new Renderer({ dpr: devicePixelRatio, alpha: true });
		const gl = renderer.gl;
		gl.clearColor(0, 0, 0, 0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		container.appendChild(gl.canvas);

		const geometry = new Triangle(gl);
		const program = new Program(gl, {
			vertex: vertexShader,
			fragment: fragmentShader,
			uniforms: {
				iTime: { value: 0 },
				iResolution: {
					value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height],
				},
				uAmplitude: { value: amplitude },
				uDistance: { value: distance },
			},
		});
		const mesh = new Mesh(gl, { geometry, program });

		function resize() {
			const { clientWidth, clientHeight } = container;
			renderer.setSize(clientWidth, clientHeight);
			program.uniforms.iResolution.value = [clientWidth, clientHeight, clientWidth / clientHeight];
		}
		window.addEventListener("resize", resize);
		resize();

		function update(t: number) {
			program.uniforms.iTime.value = t * 0.001;
			renderer.render({ scene: mesh });
			animationFrameId.current = requestAnimationFrame(update);
		}
		animationFrameId.current = requestAnimationFrame(update);

		return () => {
			if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
			window.removeEventListener("resize", resize);
			if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
			gl.getExtension("WEBGL_lose_context")?.loseContext();
		};
	}, [amplitude, distance]);

	return (
		<div
			ref={containerRef}
			className='absolute top-0 left-0 w-full h-full overflow-clip'
			{...rest}
		/>
	);
};

export default Threads;
