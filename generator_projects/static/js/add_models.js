

function add_model(){
    document.querySelector('#continer').innerHTML += 
    `
    <div class="grid_card">
            <svg onclick="remove_model(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <label for="model_name">Model Name</label>
            <input type="text" id="model_name" name="model_name" placeholder="Model Name">
            <div class="fields">
                <button onclick="add_fields(this)">Add Field</button>
                <div>
                                <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>

                    <label for="">Field Name</label>
                    <input type="text" name="">
                    <label for="">Filed Type</label>
                    <select name="" id="">
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}


function remove_model(el){
    el.parentElement.remove()
}

function add_fields(el){
    el.parentElement.innerHTML += 
    `
   <div>
                                <svg onclick="remove_fields(this)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>

                    <label for="">Field Name</label>
                    <input type="text" name="">
                    <label for="">Filed Type</label>
                    <select name="" id="">
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                        <option value="">value 1</option>
                    </select>
                </div>
    `;
}


function remove_fields(el){
    el.parentElement.remove()
}