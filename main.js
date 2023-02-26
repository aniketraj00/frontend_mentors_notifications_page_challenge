let markAsReadBtn = document.querySelector('.mark_read');
let notificationCountBadge = document.querySelector('.notification_badge');
let activeListItemsArr = Array.from(document.querySelectorAll('.list_item.active'));
let dotIcons = document.querySelectorAll('.dot_icon');
markAsReadBtn.addEventListener('click', () => {
    notificationCountBadge.innerHTML = '0';
    activeListItemsArr.forEach(el => {
        el.classList.remove('active');
    });
    dotIcons.forEach(dotIcon => {
        dotIcon.parentNode.removeChild(dotIcon);
    })
})