import React from 'react';
var service=[
    {
        'title':'Web Solution',
        'img':'https://deneb-reactjs.netlify.app/assets/icon_1.9993585c.png',
        'desc':'Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.',

    },
    {
        'title':'Strategy & Research',
        'img':'https://deneb-reactjs.netlify.app/assets/icon_2.a4a5bfa0.png',
        'desc':'Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.',

    },
    {
        'title':'Web Development',
        'img':'data:image/png;base64,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',
        'desc':'Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.',

    },
]
var project=[
    {
        'img':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAEnUlEQVRYhe2YXWwUVRTHf3f2o1KwDS1VO9BqxWQlrR8gahAYQ9aUEHkgqWiDfEUxIUaFoGli9IVYgpIYE4wEQ0wk9AHigybyIA1bm9FKCo1KsOgmNsUUBmTbYttl+8F2rw9zl043M93dUvDFf7KZzD33nt+5e++cc2cEeUrohga8DbwFLAAuAvuBj6VlpvLx5c8XDnyiwGktAPap6458HImsHXRjJbBQ3c7BnqXwazK5pDJ+7deLc0rHkkIDpAoqrvp2Scv8YdpwoRs1wDk329513Wcbant69jVXVLz7TdVjHi6qpWWe9/KvTQUHHnJrDPplqm5xbwygbnFvLOiXXmt9z1TOhdCNWcB7wAoX+zygGuClpbEL4dC1XiHg6arBweryRCLdqfNyYWF7d1GRlBCJzp13rKPsAWU6C/zj4vdHYI8f+BzYNFWEAIsr4gOvLr9yxc1WXZ5IpIPpTwQCxzrK0iav5XgWqPQD9arhBpDI6BQACgF644Fg5+XCwmxB9sYDQcftdSCZ0aVQ+a0XQjekajwsLXOrs5fQjXXA19mAU2iVtMzWDJ9fAlsg+4azbgEMMDiVccokIy3ztNCNTcDSaYA7pGX+PG24CqAJaJoGPKuy/e23Vf/D85LQjfuEbiy5VXjeJVXoxhNABCgWurFJbcibkpFQEJgLFGEnlNlAUP20RQ3Jiuhlf/5woRuPAN8BxaqpWAEDwP3AfAXNSa5wVcO3AAfSz6oCt2AXG4CvgIMyEioBntx55O5lJ84FV5BRpoUgtf6p0cjuunhnTnDsA8PjwHqhG7XYOd8J/hbYmDrydwo7AQUPtc56c3hMlLg5+7TZ9+DuuvjOzHavDdeqrkVAswv4BWmZYyr4AoCqsvEzHr5kqDzpmum8Zv4O9kFgA5PX0AlGhKM3ZCTUD5T89mHfZ90x3xdDI8LndFQyW95YUDI+ljNcWua40I3N6naDup5wgh26AJQAVJWNj3hMxlWeu90RwO/Yj8sHLmCAvnyAOcHTAQCNWXy4/qW5aCbS673THTidDOcD9vg0anasTjTCUHHWQTMBF7ohgIPAtvEUnO4KDABHZxSu3sfKpWVeygAfALYB+H0k6peNnErbE2NCaz4XnJeSk335NeTqR8d6C/wyw+I980PAK0I3moCtQEqBtwNogtGG5683vv5c4q/0gEUNpe/39Plcj1sP68mT5z/q258rvEZdN2JvysE0GBh++ZmRXY3r45ecA/rjWqWHL2KD7jYv+BvASezstsHRPgysPbx94BdgOY4isrsuvvfoqbtWjqdEwOko4Jejr60a/j5nuLTMM6qgNDORXoeBtdIyW0QYZCT0B7AoPWbXmkTXrjWJLo/JuMrzOZeW2Q7UYr9rDQMvSstsSdtFOPon8BPQnw8wJ7gjgEpgvrTM45l2EY72iXC0DWgHBvKF53JuH8rWR4SjV4GrMhIqA6qAMjwmNjSiXc8Zno9EOBoDYjISKsAuyaXYRcmHvXSWdU27uUwzCncEMQr0qN9kmz5RCv7Tc7vzFbkL+4vB7dYK1AcmP9CGnTAWMvHV6U6oTQM2qwDupNqAzf8CMXqBR4dA/NUAAAAASUVORK5CYII=',
        'rating':'300+',
        'desc':'Project Done',
    },
    {
        'img':'data:image/png;base64,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',
        'rating':'250+',
        'desc':'Project Done',
    },
    {  
        'img':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAYAAADWFImvAAAFjklEQVRYhcWXaWxUVRTHf3eYlqHtAEUg7SNlqtBSUjYRiGh4GEkENU1riKAGQoNEJVEwkUVWQ5VF9hg1IGExxkQ0Eg0J0YQP+hA3SlgMIbSUaVkeyNJSBgvd5vrhvoHb15npFAf8f5nM2eY/5557zrmC/wHCMD3AFOAlYKG0rVPiARMQQDGwAhimqUZ5HyCJSQ6BMS5VGKi/70SEYY53CIyPYbJe2tbp+0ZEGOYYoAyYGMfsOLAcIOk1IgxzmEOguAPTJmC0tK3jAEnLiDDMfIfAFFx/sE9G8630rq0t1dd8fk28LEIiKUSEYQZQNTAN6KLrMtNaGt986kLlmNxQfcmWwic0lQWs123vmYgwzGzgPWAmkKLr/L7WptfHXaxa+mxNNcCQslHjWsMikqUQMEPaVvg/ERGG2RtYArwB+HRdempry4yxf58pK6o+k5nW0gLwyo7BQ85f75qhmc2VtlXtjpswEWGYPYH5wFwgXdf5UsKtL4++HFxVHKzq629ujsi/Ptyn9+7yPrma6XfStnZGi98hEWGYGcDbwDygh65L9crw5Eev1KwuCVbmZDY26brLoZSUt3YPHKGLgNdi/U5MIsIwuwGzgcXAQ22cPFIWDbt2dnVJsDKv763b0fyn7yoYcvVmin50s6RtXUmYiDDMVOBVVKPJ0nUegZxUWHthVUmwYqjxT0OsoB//1M/YfzKznybaLm1rbyz7NkScgTQDdRX7tyEn4OlBdfbK4uqK0YHQzXgBKy938y35PneoJgqijjYuvBqJcmCk22DcwPpLK4qqK8bn1d/oKJiUMH1nwfCbjV0i1zkMTJe2FZf8HSLA424SRo+mhm3TKo5MKqyt6yhIBGX7AoFDNf4+mmittK2Difh6nE8fiv0d2PWpaat/yBl49HxGenu36PjqUN/+LlG+MEy3LCpUSw7VVAt/YB8wFMiJKM/W+TJ2HMzKDV7t5n1ywI3raanhcIw4APxc2dN78lKanpHBwGzhD6QKf+BPQjXNsXzvzoZQjS38gR1ABeqougOEpRDHzmf02vZLdg7QPPaRUMjTfmaHgb0FWQ1zth4wgo5/JJNe1C5SKvyBi8IfOEGopl2AqGuAMMx0YCGqk7Zp43l9b9VvmFx14vmhtbWO6DTwqaeESs2/O7AM1YXbzCHgV1SbL++QiBYwF/gQNdrbYEJB3blNL1YtKMxu+MZTQmsM/zxgA1DkUklgF7BY2talDoloAU3gI2C4S7Ve2tb8BPwnAptQNaMjBCyXtrXZ096tPaRtWajr/ZlL1RTFPJr/j6itfS6g9yM/sEkYZn5CRBxk0jbFNrCuE/69gHxck9tBVWf2kU+AbO37TGlb1ztycobnO8ACVAZ0XACekbbVmhARYZhTgamaaIuT7ng+HqAUeB8wXOoQ6hJslLZ1CxIoVmGYWcAJVGoBzgDD480P5zG1FtUgdbQAW4EV7pUgkYxs10iEgdJYJIRhjkAtxROiqPcAi6RtVUTzjUtEGOYs4DlNtFHa1oEodjnAStQm787yb8D8joZfzKMRhvkwcIy7BXYCeEzaVqNm0xN4F3Utfa4Qp4FFwLfStmQ8EhAjI06h7dRItKD2ikZHn4ra4pfjWiOBa6jlaqu0rYT6TEwiwBzaPprLpG0dcRaoycAaYIDL5zawGVgjbas+UQIRtDsaYZgFwFGgqyMqB8aiJuo651OHBL4AlkrbOtdZAlGJCMP0ooprlCNqRA28UuCFKP77gXnSto7dK4EI3EezWCMBai7swfWmBf5C3YS4Ta0zuJMRYZgjgT+ikNNxAbVnfO5+uyaFiDDMrsBhoDCGXbuWnGxE/v0HMUjEbMnJhhCGORA4xd2NPoK4LTnZ8KIe1jqJ31E3IaH3SLIQqZFBqCb1JQm25GTjX28HzplvTGPLAAAAAElFTkSuQmCC',  
        'rating':'200+',
        'desc':'Active Projects',
    },
    {  
        'img':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAFR0lEQVRYhbWYT2xURRzHP7Pt1nZboGBN00mwVQoWKgRIAKPwVGI8QEiAgxW5cMGDEEHBWA9yQA+Ei1GCCSaEJiSAXBD/cENhDOFfUkWsCJTCgUwMpdB2S1sp2/Hwfs8+Xne3u0v7TTb75jff+f6+b97MvJmnyAClvTXAN0BVJk6BuAu866w5ljZvBjNKGk4bZzMB7gFVzhqX0ZDSXhEwSYpTgFtAr7Nmyng6UdrrASYDdUCPhJPOmhRAsdJeAtgLvAOURNqPuoNxQKB5KxR7qLR3CNhUDHwFbJCKwLHCv4uJRG/I3BTxkIoB6yW4xFlT6aypBGrzUVbaa1Taa8zTUG0o3xKJrY8xMo7a8xQMzNQAF4GLcl0IgtwqBrRK4ZUQYUD+c3lsW4Ey+W3NgR9oDoRiQe7WGHBSCmuCWmfNv4Fjpb3iTMpKezOUYvP/ZcVmpb0ZWfjFyBMJ5QjnPhkDjkihSWmvMkTqlP9nIqI7lPZ+U9pLAu3OkVhcl+xcXJfsdI4E0K60lxTOjoinQKszpFcJNEnxSMxZ0wacBhLA9lDjO/KvI6IbgflARXlJ6lFjTf/93Ws7ruxe23Glsab/fnlJ6hFQIZyNkbaB1p1QbLvkPu2saYtJMLiT7Up7DXIdDLQGHsd6/CnL/OkPui40t55dVt/Tu6y+p/dCc+vZ+dMfdAHEFH2MzGAiWu0AkivohB0AMQBnjQEOAk8BR5X2yoE2Ic4LKwr3zZii78yNydU7T9TWBXU7T9TWnbkxuTpe5AaGHW8IN4xAq01yHJWcBwNuLETeAtwA5gLHgEsSfykiirPm/LDjJ4BEPJXae0rrvae0TsRTKYChlDrurDkfbRfSuiQ55krOLQHhsZer0t4c/PFUBVwBZgNDwNPOmmSE+wcwt7wkNfTgYVEcIHR92VkzL8KfBHQB8ZD2XeBVZ81fAS/cQ0jFcvxBN1vCcWBFRDyOjAcxcBu4HRgDGoQTxgrRQrTvAMvDZkYZElOXgYXAuVA4OjgV0Cd3vA2YJb9tEutj9NYmrHEOWCi5RgmnhWxH3gO+EOP1zpqOUH0FMBRZ4FDaKwVKnDW9odjz+DNrGPgA+DrYbuQNpb1DSntOaW9/QQK+xn7RODQWd9QjS4PPgRSwQWlvQQFmFiBbC9F6MkMy6PYJt0VprywPM2VAi7TdFx3ABRkSfAx04C9sB2R8jWWmCDggbW6KxpjIyZCzpg9Yh79laAIOyuDNZKYUf+VvkjZvi8aYyDjLMiRaBXyLv/e5CjQDPwQzRnplFbALeEHMvOWs+THnHPkYkqRLgMPAcxLqBoKxMQcItjA38XvmQl76+RoSUwn8RXBnBspnwC5nTX/e2oUYElNV+ButQWAl/gmiBXgWmO2s+bsQ3VxnWToEJ4XrzpqfnTW/MPLoXi5UtCBD8uL8VIrfhaqC83qzPNaJNyR74MP4PdQJfBmqbgGuAzOB75X2qvPWz8NIKf6Ldh3+SRP8jdbvEepMRh5ZP34PbnLWdI+3oaXAr7nyI1jtrDmeCzHjmSsL9yr+wpcL3gcWkMeN52MowD/OmpZciEp7q8VQzniSaT8hyNpD8iWtAajGP/gBVCrtvZajfvA58EWlvW78L2d/OmuGM+bMYqYGOA4syjF5rrgGrHTWpP3akq2H9gCLykrcwNRy15uFlzOSA6oiOahm4a9XS9NxsvVQFzDt5Cf397w+5+G98TB0625Raf2HVR8NO2JAmbNmMMrJNqiLAGZUp/J+Y2dCXVVqsKTYDUkx7QYvWw91M7IiTwSmplu9s/XQqEPcOOIakExX8R+QYbsPSRJipwAAAABJRU5ErkJggg==',
        'rating':'5+',
        'desc':'Year Experience',
    },
    
]
var design_cards=[
    {
        'img':'https://deneb-reactjs.netlify.app/assets/portfolio_1.68e3f4f2.jpg',
        'desc':'Design & Develop',
        'para':'Design',
    },
    {
        'img':'https://deneb-reactjs.netlify.app/assets/portfolio_2.65e7f335.jpg',
        'desc':'Design & Develop',
        'para':'Design',
    },
    {
        'img':'https://deneb-reactjs.netlify.app/assets/portfolio_3.3a8d653f.jpg',
        'desc':'Design & Develop',
        'para':'Design',
    },
]
var diff_lev=[
    {
        'img':'data:image/png;base64,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',
        'level':'Basic',
        'p1':'Graphic Design',
        'p2':'Web Design',
        'p3':'UI/UX',
        'p4':'HTML/CSS',
        'p5':'SEO Marketing',
        'p6':'Business Analysis',
        'dollors':'$ 75',
        'per':'/ Month',
    },
    {
        'img':'data:image/png;base64,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',
        'level':'Standard',
        'p1':'Graphic Design',
        'p2':'Web Design',
        'p3':'UI/UX',
        'p4':'HTML/CSS',
        'p5':'SEO Marketing',
        'p6':'Business Analysis',
        'dollors':'$ 95',
        'per':'/ Month',
    },
    {
        'img':'data:image/png;base64,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',
        'level':'premium',
        'p1':'Graphic Design',
        'p2':'Web Design',
        'p3':'UI/UX',
        'p4':'HTML/CSS',
        'p5':'SEO Marketing',
        'p6':'Business Analysis',
        'dollors':'$ 99',
        'per':'/ Month',
    },
]
export default function Home(){
    return(
        <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <h1 className='slider_title'>We Are Creative</h1>
                                            <h1 className='slider_title1'>A2Z Infotech</h1>
                                            <p className='a_us'>We Are Professional Freelance Web Designer</p>
                                            <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
                                            <button className='h_butt1 btn btn-warning font-weight-bold text-white'>Hire Me</button>
                                        </div>
                                        <div className='col-md-7'>
                                            <img src='https://acumen.sg/wp-content/uploads/2016/07/Creative-Thinking.jpg' class="h-100 w-100"/>
                                        </div>
                                    </div> 
                                </div>
                                <div class="carousel-item">
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <h1 className='slider_title'>We Are Creative</h1>
                                            <h1 className='slider_title1'>A2Z Infotech</h1>
                                            <p className='a_us'>We Are Professional Freelance Web Designer</p>
                                            <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
                                            <button className='h_butt1 btn btn-warning text-primary'>Hire Me</button>
                                        </div>
                                        <div className='col-md-7'>
                                            <img src='https://innoverce365.com/wp-content/uploads/2020/03/innovation-in-business.jpg' class="h-100 w-100"/>
                                        </div>
                                    </div> 
                                </div>
                                <div class="carousel-item">
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <h1 className='slider_title'>We Are Creative</h1>
                                            <h1 className='slider_title1'>A2Z Infotech</h1>
                                            <p className='a_us'>We Are Professional Freelance Web Designer</p>
                                            <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
                                            <button className='h_butt1 btn btn-warning text-primary'>Hire Me</button>
                                        </div>
                                        <div className='col-md-7'>
                                            <img src='https://4.bp.blogspot.com/-LkXIq48IorE/TeHY246jgXI/AAAAAAAAPhA/8tHcsxUtq9E/s1600/lightbulb.jpg' class="h-100 w-100"/>

                                        </div>
                                     </div>
                                </div>
                                <button class="carousel-control-prev sl_button" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </button>
                                <button class="carousel-control-next sl_button" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-md-12 text-center'>
                        <h1 className='font-weight-bold'>Our Services</h1>
                        <p>When unknow printer took a gallery of type and scramblted it<br/> to makea type specimen book</p>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <div className='row'>
                            {
                                service.map((val)=>{
                                    return(
                                        <div className='col-md-4'>
                                            <div className='card service_card mt-5'>
                                                <div className='card-header text-center border-none bg-white'>
                                                    <img src={val.img}/>
                                                </div>
                                                <div className='card-body text-center border-none bg-white'>
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                    <button className='btn btn-warning h_butt1 text-light'>Read More</button>
                                                </div>                            
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5 mt-3'>
                        <img src='https://a2zithub.org/uploads/165702275034388063.jpg' class="h-100 w-100"/>
                    </div>
                    <div className='col-md-6 mt-3 ml-5'>
                        <h1 className='mt-5 font-weight-bold'>Why You Hire Us?</h1>
                        <p className='mt-5'>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
                        <br/>
                        <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
                        <button className='btn btn-warning h_butt1 text-white'>READ MORE</button>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h1 className='font-weight-bold mt-5'>Over 500+ Completed work & Still Counting</h1>
                        <p className='mt-5'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at orci non risus luctus commodo. Ut nibh tellus, faucibus nec gravida.</p>
                        <br/>
                        <p>Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel non ex. Quisque a finibus justo.</p>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='row text-center'>
                            
                                <div className='row'>
                                {
                                    project.map((val)=>{
                                        return(
                                            <div className='col-md-5 project_if mt-4 ml-3'>

                                                <img src={val.img}/>
                                                <h2 className='font-weight-bold mt-4 text-warning'>{val.rating}</h2>
                                                <p className='mt-3'>{val.desc}</p>
                                            </div>
                                        );
                                })
                                }
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='mt-5 text-center font-weight-bold'>Our Latest Projects</h1>
                        <p className='text-center mt-3'>When unknow printer took a gallery of type and scramblted it to makea<br/> type specimen book</p>
                        <div className='container'>
                            <div className='row mt-5'>
                                <div className='col-md-3'>
                                    <button className='btn btn-warning text-white font-weight-bold but_dev ml-5'>DEVELOPMENT</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='ml-5 btn btn-white border-none p_but'>WEB DESIGN</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='ml-5 btn btn-white border-none p_but'>APPS DEVELOPMENT</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='ml-5 btn btn-white border-none p_but'>MARKETING</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row'>
                            {
                                design_cards.map((val)=>{
                                    return(
                                        <div className='col-md-4 mt-5'>
                                        <div className='card text-center des_card'>
                                            <div className='card-body'>
                                                <img src={val.img} className='h-100 w-100'/>
                                            </div>
                                            <div className='card-footer'>
                                                <h3 className='mt-3'>{val.desc}</h3>  
                                                <p className='mb-3'>{val.para}</p> 
                                            </div>
                                        </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1 className='mt-5 font-weight-bold'>Afforable Pricing</h1>
                    </div>
                    <div className='col-md-12 mt-5'>
                        <div className='row'>
                            {
                                diff_lev.map((val)=>{
                                    return(
                                        <div className='col-md-4 text-center diff_lev'>
                                            <img src={val.img} className="mt-5"/>
                                            <h1 className='font-weight-bold mt-3'>{val.level}</h1>
                                            <p>{val.p1}</p>
                                            <p>{val.p2}</p>
                                            <p>{val.p3}</p>
                                            <p>{val.p4}</p>
                                            <p>{val.p5}</p>
                                            <p>{val.p6}</p>
                                            <h1 className='font-weight-bold mt-3'>{val.dollors}<span className='text-warning'>{val.per}</span></h1>
                                            <button className='btn btn-warning text-white but_dev mt-3 mb-5'>START NOW</button>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='col-md-12 mt-5 text-center'>
                        <h1 className='text-center font-weight-bold mt-5'>What People Say</h1>
                        <p className='mt-3'>When unknow printer took a <br/>gallery of type and scramblted it to make a type specimen book</p>
                        <img src='https://deneb-reactjs.netlify.app/assets/testimonial_1.0ba28906.jpg' className='rounded-lg'/>
                        <h2 className='font-weight-bold mt-2'>John Doe</h2>
                        <h5 className='text-warning'>Freelancer UX Designer</h5>
                        <p className='mt-3'>Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                                molestie ligula, vitae convallis orci justo vitae sem. Integer vitae
                                imperdiet augue, sed accumsan diam. Etiam non quam commodo dolor
                                convallis cursus. Duis tempus dolor eget gravida fringilla. In
                                ultricies velit eget sem tempus egestas</p>
                    </div>
                </div>
            </div>
        </section>

        </>
        
    )
}