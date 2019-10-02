import app from './app'
import '@babel/polyfill'

async function main() {
    try{await app.listen(3000)
    console.log('Server on port 3000')}catch(e){console.log(e)}
}

main()