check:
	@git add -A
	@git commit -m "checkpoint at $$(date '+%Y-%m-%d %H:%M:%S%z')"
	@git push > /dev/null 2>&1
	@echo Checkpoint created and pushed to remote

push:
	@if [ -z "${msg}" ]; then echo 'Error: Message is not set. Use make push msg="<your message>"'; exit 1; fi
	@git add -A
	@git commit -m "${msg}"
	@git push > /dev/null 2>&1
	@echo Commit \""${msg}"\" created and pushed to remote