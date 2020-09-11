## Docker container commands
- Menampilkan semua container yang sedang berjalan.
```
docker container ps
```
- Menampilkan semua container di dalam komputer kita baik yang sedang berjalan maupun tidak.
```
docker container ps -a
```
- Menampilkan semua image yang ada di dalam computer kita.
```
docker image ls
```
- Membuat image buatan kita sendiri.
```
docker build -t your-image-name
```
- Menjalankan sebuah container.
```
docker container run
```

## Docker compose commands
- Menjalankan semua container secara bersamaan.
```
docker-compose up
```
- Menampilkan semua container yang ada di docker compose.
```
docker-compose ps
```
- Menampilkan seluruh log yang dibuat pada container.
```
docker-compose logs
```
- Mematikan seluruh container
```
docker-compose stop
```
- Mematikan seluruh container dan menghapus container-container yang ada.
```
docker-compose down
```

## How to run this App
- create image & run containers simultaneously 
```
docker-compose up --build
```