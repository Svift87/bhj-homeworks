let chatWidget = document.querySelector('.chat-widget'),
    chatWidgetInput = document.querySelector('.chat-widget__input'),
    messages = document.querySelector( '.chat-widget__messages' ),
    messageArr = [];

messageArr.push(
    `<div class="message">
        <div class="message__time">
            ${new Date().getHours()}:${new Date().getMinutes()}
        </div>
        <div class="message__text">
            Ну пожалуйста =(
        </div>
    </div>
    `
);

messageArr.push(
    `<div class="message">
        <div class="message__time">
            ${new Date().getHours()}:${new Date().getMinutes()}
        </div>
        <div class="message__text">
            Быстрее зачет!
        </div>
    </div>
    `
);

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

messages.innerHTML += `
<div class="message">
    <div class="message__time">
        ${new Date().getHours()}:${new Date().getMinutes()}
    </div>
    <div class="message__text">
        Зачет мне
    </div>
</div>
`;   

chatWidget.addEventListener('click', function () { 
    chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keydown',function(){
    let rand = messageArr.randomElement();
    if(event.keyCode==13 && chatWidgetInput.value != '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">
                ${new Date().getHours()}:${new Date().getMinutes()}
            </div>
            <div class="message__text">
                ${chatWidgetInput.value}
            </div>
        </div>
        `;

        messages.innerHTML += rand;
    }
})