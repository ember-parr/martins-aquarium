export const Tips = (tipsObj) => {
    return `
    <div class="fishTip-card">
        <h4>•${tipsObj.tipName}•</h4>
        <p>${tipsObj.tip}</p>
        <small>Written By: ${tipsObj.tipAuthor} on ${tipsObj.tipDate}</small>
    </div>
    `
}