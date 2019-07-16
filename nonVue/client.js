
class Client{
    #id;
    #name;
    #email;
    #address;
    #phone_num;
    #birth_date;
    #orders;
    #pay_meth;
    constructor(id){
        this.#id = id;
        this.#name = null;
        this.#email = null;
        this.#address = new Address();
        this.#phone_num = null;
        this.#birth_date = new Daytime();
        this.#orders = new Array();
        this.#pay_meth = null;
    }

    //Setters:
    set_id(id)
    {
        this.#id = id;
    }
    set_name(name)
    {
        this.#name = name;
    }
    set_email(email)
    {
        this.#email = email;
    }
    set_address(address)
    {
        this.#address = address
    }
    set_phone_num(phone_num)
    {
        this.#phone_num = phone_num;
    }
    set_birthdate(day,month,year)
    {
        this.#birth_date.set_day(day);
        this.#birth_date.set_month(month);
        this.#birth_date.set_year(year);
    }
    add_order(order)
    {  
        this.#orders.push(order);
    }
    remove_order(order_id)
    {
        let result = false;
        if(order_id < this.#orders.length){
            this.#orders.splice(order_id);
            result = true;
        }
        return result;
    }
    set_pay_meth(pay_meth)
    {
        this.#pay_meth = pay_meth;
    }

    //Getters:
    get_id()
    {
        return this.#id;
    }
    get_name()
    {
        return this.#name;
    }
    get_email()
    {
        return this.#email;
    }
    get_address()
    {
        return this.#address;
    }
    get_phone_num()
    {
        return this.#phone_num;
    }
    get_birthdate()
    {
        return this.#birth_date;
    }
    search_order_index(index){
        let result = null;
        if((index < this.#orders.length) && (index >= 0)){
            result = this.#orders[index];
        }
        return result;
    }
    get_orders_length(){
        return this.#orders.length;
    }
    get_pay_meth(pay_meth)
    {
        return this.#pay_meth;
    }
}