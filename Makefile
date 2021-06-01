install:
	cd ./api && npm install
	cd ./view && npm install

start:
	cd ./view && npm start & cd ./api && npm start
