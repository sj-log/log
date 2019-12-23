const sitemap = require('nextjs-sitemap-generator');  

sitemap({  
  alternateUrls: {  
      en: 'https://log-sj.now.sh',
      ko: 'https://log-sj.now.sh'  
  },  
  baseUrl: 'https://log-sj.now.sh',  
  ignoredPaths: ['admin'],  
  pagesDirectory: __dirname + "\\src\\pages",  
  targetDirectory : 'src/public/static/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],

});