## My Resume
### This is my resume, you can find it on 2 servers

* https://damianpumar.com/ 
* https://damianpumar.github.io/

## Installation
1. Clone the repo
2. Change npm version. ( Optional step, if you have *[nvm](https://github.com/nvm-sh/nvm)* just run the command below otherwise install 8.* node version )

        nvm use
3. Install all dependencies

        npm install    

## Running
1. Run gulp for dev environment ( *dev environment listening on [http://localhost:8080](http://localhost:8080)* )

        npm run dev

2. Run e2e test ( I'm using *[protractor](https://www.protractortest.org/#/)* and *[Jasmine](https://jasmine.github.io/)* )

        npm run test
        

## Deployment
1. Run gulp for release version ( *in* **dest** *folder you can see all minified files ready for deploy* )

        npm run release
        
## Autor
**[Damián Pumar](https://github.com/damianpumar)**

## License
[MIT](https://choosealicense.com/licenses/mit/)