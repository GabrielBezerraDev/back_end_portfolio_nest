#!/bin/bash
docker cp db mysql:/
docker exec -it mysql bash -c "mysql -u root --password=root nest < /db/pokemon.sql"