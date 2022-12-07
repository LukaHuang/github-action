const composeWeeklyTemplate = (content) =>
  `
  <html>
    <head>
      <style type="text/css">
        .body {
          color: rgb(117, 117, 117);
          max-width: 600px;
          margin: auto;
        }
    
        h1 {
          display: block;
          margin: 0;
          padding: 0;
          color: #222222;
          font-family: Helvetica;
          font-size: 40px;
          font-style: normal;
          font-weight: bold;
          line-height: 150%;
          letter-spacing: normal;
          text-align: center;
        }
        
        a {
          text-decoration: none;
          color: #007C89;
          font-weight: normal;
        }
    
        ul{
         padding-left: 20px !important;
        }
        li {
          padding: 0 !important;
          margin: 0 !important;
        }
        
        h3  a{
            text-decoration:none !important; 
            color:#295ba7 !important; 
            font-weight: bold !important;
            font-size: 20px !important;
        }
        h2{
            font-size: 18px;
            margin: 10px 0;
        }
        
        h2{
          background-color: #295ba7;
          color: #fff;
          border-radius: 3px;
          display: inline-block;
          padding: 4px 10px;
          text-transform: uppercase;
        }
        h2:nth-child(1) {
          background-color: #c31208;
          color: #fff;
          border-radius: 3px;
          display: inline-block;
          padding: 4px 10px;
          text-transform: uppercase;
        }
        #StarBugs-Weekly {
          background-color: #000;
          color: #fff;
          border-radius: 3px;
          display: inline-block;
          padding: 4px 10px;
          text-transform: uppercase;
        }
        #Feedback {
          background-color: #858585;
          color: #fff;
          border-radius: 3px;
          display: inline-block;
          padding: 4px 10px;
          text-transform: uppercase;
        }
        @media
      </style>
    </head>
    <body>
      <div class="body">
      <div style="text-align: center;">
      <h1>StarBugs Weekly<br />
      星巴哥技術週刊</h1>
      StarBugs Weekly 是由一群帥的不明顯的開發者，所發佈的週刊。</div><br/>

      <div style="text-align: center;"><span style="font-size:14px">若您的信件無法正確顯示信件，可以到 <a href="https://weekly.starbugs.dev/" style="text-decoration:none;" target="_blank">StarBugs 網站</a> 上瀏覽完整週刊。<br />
      如果喜歡 StarBugs 的內容，歡迎到 <a href="https://www.facebook.com/StarBugsWeekly/" style="text-decoration:none;" target="_blank">Facebook 粉絲專頁</a>&nbsp;按讚追蹤：）</span></div>

      <hr />

      ${content}
      </div>
    </body>
  `

module.exports = { composeWeeklyTemplate }
