class Order {
    #id;
    #client_id;
    #items;
    #order_date;
    constructor(id,client_id)
    {
        this.#id = id;
        this.#client_id = client_id;
        this.#items = new Array();
        this.#order_date = new Daytime();
        this.#order_date.set_actual_date();
    }
    add_item(item)
    {
        this.#items.push(item);
    }
    remove_item(item_id)
    {
        let result = false;
        if(item_id < this.#items.length){
            this.#items.splice(item_id);
            result = true;
        }
        return result;
    }
    get_id()
    {
        return this.#id;
    }
    get_client_id()
    {
        return this.#client_id;
    }
    search_item_index(index){
        let result = null;
        if((index < this.#items) || (index >= 0)){
            result = this.#items[index];
        }
        return result;
    }
    get_items_length(){
        return this.#items.length;
    }
    get_data(){
        return this.#order_date;
    }
}