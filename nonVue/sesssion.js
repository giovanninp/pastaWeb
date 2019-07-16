let actual_client = new Client(0);

const current_location = {
    country:"Brazil",
    state:"Pernambuco",
    city:"Recife"
}

const available_locations = {
    zona_norte : {
        bairros: ["Aflitos","Casa Forte","Boa Vista","Encruzilhada",
        "Graças","Ilha do Leite","Torre","Derby"
        ,"Rosarinho","Recife"]
    },
    zona_sul : {
        bairros:["Boa Viagem","Pina"]
    }
}

function collect_client_address()
{
    let new_address = new Address();
    new_address.set_country(current_location.country);
    new_address.set_state(current_location.state);
    new_address.set_city(current_location.city);
    
}

function add_item_cart(client,item){
    if(client.get_orders_length() == 0){
        client.add_order(new Order(0,client.get_id()));
    }
    client.search_order_index(0).add_item(item);
}

function remove_item_cart(client,order_id,item_id){
    let result = false;
    if(client.search_order_index(order_id).search_item_index(item_id) != null)
    {
        client.search_order_index(order_id).remove_item(item_id);
        result = true;
    }
    return result;
}

