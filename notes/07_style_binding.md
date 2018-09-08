#Style and class binding

Style binding is a variation of property binding

    <h2 [style.color]="!isActive ? 'blue' : 'white'">Are you sure?</h2>
Class binding

    <button class="btn" [class]="isActive ? 'btn-primary' : ''">OK</button>
    
Style property places depending on the expression value

All possible style propertes are here
https://www.w3schools.com/jsref/dom_obj_style.asp
 
