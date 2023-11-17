start_docker:
	docker compose up

create_env:
	cp .env.example .env

connect_to_container:
	docker run -it $(container_name)