const chat = document.querySelector("[data-chat]");
const tempMessage = document.querySelector("[data-message]");
const chatInput = document.getElementById("chatInput");
const Students = document.querySelector("[data-students]");
const studSearch = document.querySelector("[stud-Data-Search]");

//// getting students data from local server at port 5500:
fetch("http://127.0.0.1:5500/../Api/students.json").then(rep => rep.json()).then(JSONstudents => { 
    JSONstudents.forEach(stud => {
        const studCard = document.createElement('div');
        const studImg = document.createElement('div');
        const studInfo = document.createElement('div');
        const studName = document.createElement('h5');
        const studCurntMsg = document.createElement('p');
        /// => toggling the CSS to the students card:
        studCard.classList.add("stud");
        studImg.classList.add("profileImg");
        studInfo.classList.add("studInfo");
        studCurntMsg.setAttribute('last-message-view', '');
        ///////////////////////////////////////////////////
        studImg.style.backgroundImage = `url(${stud.img})`;
        studName.textContent = stud.name;
        studCurntMsg.textContent = "message sending..";
        studInfo.appendChild(studName);
        studInfo.appendChild(studCurntMsg);
        studCard.appendChild(studImg);
        studCard.appendChild(studInfo);
        Students.appendChild(studCard);
        stud.element = studCard;

        //// => adding the search event for the students:
        studSearch.addEventListener('input', (e) => {
            const isTarget = stud.name.includes(e.target.value.toLowerCase());
            stud.element.classList.toggle("hideCards", !isTarget);
        });

        chatInput.addEventListener("keydown", e => {
            if(e.key.toLocaleLowerCase() === "enter"){
                let Time = new Date();
                const bubleChat = tempMessage.content.cloneNode(true).children[0];
                const message = bubleChat.querySelector("[message]");
                const time = bubleChat.querySelector("[message-time]");
                if(chatInput.value && chatInput.value[0] !== ' '){
                    message.textContent = chatInput.value;
                    time.textContent = `${validateNumByZero(Time.getHours())}:${validateNumByZero(Time.getMinutes())}`;
                    chatInput.value.length > 26 ? studCurntMsg.textContent = chatInput.value.slice(0,19) + "..." : studCurntMsg.textContent = chatInput.value;
                    chat.insertBefore(bubleChat, chat.children[0]);
                    chatInput.value = '';
                };
            };
        });
    });
});

const emojiBtn = document.getElementById("emojibtn");
const emojis =  document.querySelector('[data-emoji]');
const displayEmojis = document.querySelector('[display-emojis]');
for (let emoji = 0; emoji < Emojis.length; emoji++) {
    const button = document.createElement('button');
    button.textContent = Emojis[emoji];
    displayEmojis.appendChild(button);
    button.addEventListener("click", () =>{
        chatInput.value += `${button.textContent}`;
    });
};

emojiBtn.addEventListener('click', () =>{
    emojis.classList.toggle("activeEmoji");
});

function validateNumByZero(num){
    return num < 10 ? `0${num}`:num;
};