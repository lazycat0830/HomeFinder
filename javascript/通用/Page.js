function NowPage(link) {
    var linkText = link.innerText || link.textContent;
        nowPage=linkText;
        console.log(nowPage);
        sessionStorage.setItem("nowPage",nowPage);
        content_in.innerText='';
        pagination.innerHTML='';
        viewDownTimeallData();
    }

