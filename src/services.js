
export function dayClick(el) {
    console.log(el);
    if (el.classList.contains('disabled')) return;
    el.classList.add('clicked');

    let idA = el.dataset.day.split("_");
    let parId = getParentByClass(el, 'desky-cal-container').id;
    let targetId = parId.substring(parId.indexOf("_") + 1);
    // console.log(target_id);
    let input = document.getElementById(targetId);
    let centerDate = new Date();

    if (idA[1] == "anyDate") {
        input.value = "Any";
    } else {
        centerDate.setYear(idA[1]);
        centerDate.setMonth(idA[2]-1);
        centerDate.setDate(idA[3]);
        // input.value = centerDate;
        input.value = centerDate.getFullYear()+"-"+String(parseInt(centerDate.getMonth())+1).padStart(2,"0")+"-"+String(parseInt(centerDate.getDate())).padStart(2,'0');
    }

    // call callback just if function is defined
    if (typeof deskyOpts[targetId].callback === 'function') {
        console.log("call back function");
        deskyOpts[targetId].callback(centerDate);
    }

    if (deskyOpts[targetId].next_input != null) {
        /// redraw next input
        let nextInput = deskyOpts[targetId].next_input;
        let nextInputParent = document.getElementById('deskycal_container_'+nextInput);
        let nextInputEl=document.getElementById(nextInput);

        deskyOpts[nextInput].disabled_before = centerDate.getTime();
        nextInputEl.value = centerDate.getFullYear()+"-"+String(parseInt(centerDate.getMonth())+1).padStart(2,"0")+"-"+String(parseInt(centerDate.getDate())).padStart(2,'0');
        drawCalSel(nextInputParent, nextInput, idA[1], idA[2]-1)
    }
    let to=300;

    setTimeout(function(){
        el.classList.remove("clicked");
        closeCalSel();
    },to)
}

export function getParentByClass(el, className, maxDepth=10) {
    let i=0;
    while (!el.classList.contains(className)) {
        el=el.parentElement;
        i++;
        if (i>maxDepth) return false;
    }
    return el;
}
