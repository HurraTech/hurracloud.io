# Setting up dev environment

1- git clone the project

2- Run npm install

3- To start dev server, run the following command
`npm run dev`

# Exporting Static Version

1- Start new build `npx next build` 

2- run `npx next export`

3- The static folder will be generated in out folder

4- It must be from HTTP server. To try, go to the out folder then run
`python -m SimpleHTTPServer`

5- Test by opening http://localhost:8000 
