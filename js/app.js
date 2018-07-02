window.onload=function(){
			var viewWidth=window.innerWidth;
			var desWidth=540;
			var main=document.getElementById("main");
			var homepage=document.getElementById("homePage");
			var welcomePage=document.getElementById("welcomePage");
			var startText=document.getElementById("startText");
			var i=0;
			var speed=0;
			var portrait=document.getElementById("portrait");
			var welcomePageBtn=document.getElementById("welcomePageBtn");
			var loginPage=document.getElementById("loginPage");
			var file=document.querySelector("[type=file]");
			var registerPage=document.getElementById("registerPage");
			var back=document.getElementById("back");
			var noteSlide=document.getElementById("noteSlide");
			var sort=document.getElementById("sort");
			var noteClassify=document.getElementById("noteClassify");
			var slideRight=document.getElementById("slideRight");
			var loginbtn=document.getElementById("login");
			var logout=document.getElementById("logout")
			welcomePage.innerHTML+=welcomePage.innerHTML;
			function data() {
				var emailname=loginPage.querySelector('[type=email]');
						var password=loginPage.querySelector('[type=text');	
						var email=emailname.value;
						var pass=password.value;
						var xhr=new XMLHttpRequest();
						xhr.open('post','user.php',true);
						xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xhr.send("email="+email+"&password="+pass);
						xhr.onreadystatechange=function(){
							if(xhr.readyState==4&&xhr.status==200){
								var text=JSON.parse(xhr.responseText);
								alert(text);
								//if(text==0){alert("登录成功");}
								//else{alert("请先注册账号");}
								return false;
							}

						}
						
			}
			var homePage=(function(){
				function init(){
					//homepage.style.top=0+'px';
					//homepage.style.zIndex='100';
					bind();
					if(viewWidth>desWidth){
						main.style.width=desWidth+'px';}
				}
				function bind(){
						startText.onclick=function(){
						var welcomePage=document.getElementById("welcomePage");
						welcomePage.style.transition='transform .8s linear';
						welcomePage.style.transform='translate3d(0,'+(-100)+'%'+',0)';
						welcomePage.addEventListener('transitionend',function(){
							WelcomePage.move();
						});
					};
					sort.onclick=function(){
						slideRight.style.transition='transform linear .8s';
						slideRight.style.transform='translate3d('+(100)+'%'+',0,0)';
						noteSlide.style.transition='transform linear .8s';
						noteSlide.style.transform='translate3d('+(100)+'%'+',0,0)';
					}
					 back.onclick=function(){
						slideRight.style.transition='transform linear .5s';
						slideRight.style.transform='translate3d(0,0,0)';
						noteSlide.style.transition='transform linear .8s';
						noteSlide.style.transform='translate3d('+(-100)+'%,'+'0,0)';
					}
					logout.onclick=function(){
						//loginPage.style.top=0+'px';
						noteClassify.style.top=window.innerHeight+'px';
					};
					
				}
				return{init:init};
			})();
			var WelcomePage=(function(){
				function init(){bind();}
				function bind(){
					var welcomePageBtn=document.getElementById("welcomePageBtn");
					welcomePageBtn.onclick=function(){
						loginPage.style.transition='transform linear .8s';
						loginPage.style.transform='translate3d(0,'+(-200)+'%'+',0)';
					};
				}
				function move(){
					speed++;
					var timer=setInterval(function(){
						if(speed%100==0){
							clearInterval(timer);
							timeout=setTimeout(move,1000);
						}else{
							speed++;
							if(speed>400){
								speed=0;
							}
						}
						welcomePage.style.left=-(speed)+'%';
					},8);	
				}
				return{init:init,
					move:move
				};
			})();
		var login=(function(){
			var loginTip=document.getElementById("loginTip");
			function init(){bind();}
			function bind(){
				loginbtn.onclick=function(event){
						data();	
						noteClassify.style.top=0+'px';
						}
				loginTip.onclick=function(){
					registerPage.style.top=0+'px';
				};
				document.onclick=function(e){
					var fileobj=file.files[0];
					var fr=new FileReader();
					if(fileobj){
						fr.readAsDataURL(fileobj);
					}
					fr.onload=function(e){
						var img=document.createElement("img");
						img.src=this.result;
						portrait.appendChild(img);
					}
				};
				registerTip.onclick=function(){
					registerPage.style.top=window.innerHeight+'px';
				}
						//noteClassify.style.top=0+'px';
				};
				
				return{init:init};
			})();
		homePage.init();
		WelcomePage.init();
		login.init();	
		};
