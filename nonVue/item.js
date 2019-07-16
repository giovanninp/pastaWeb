const none = 0

class Item{
    #id;
    #type;
    #flavor;
    #price;
    #quantity;
    #description;
    #observation;
    #available;
    constructor(id,type)
    {
        this.#id = id;
        this.#type = type;
        this.#flavor = null;
        this.#price = 0;
        this.#quantity = none;
        this.#description = null;
        this.#observation = null;
        this.#available = false;
    }
    set_id(id)
    {
        this.#id = id;
    }
    set_type(type)
    {
        this.#type = type;
    }
    set_flavor(flavor)
    {
        this.#flavor = flavor;
    }
    set_price(price)
    {
        this.#price = price;
    }
    set_quantity(quantity)
    {
        this.#quantity = quantity;
    }
    set_description(description)
    {
        this.#description = description;
    }
    set_observation(obs)
    {
        this.#observation = obs;
    }
    set_available(available)
    {
        this.#available = available;
    }

    get_id()
    {
        return this.#id;
    }
    get_type()
    {
        return this.#type;
    }
    get_flavor()
    {
        return this.#flavor;
    }
    get_price()
    {
        return this.#price;
    }
    get_quantity()
    {
        return this.#quantity;
    }
    get_description()
    {
        return this.#description;
    }
    get_observation()
    {
        return this.#observation;
    }
    set_available()
    {
        return this.#available;
    }
}

function read_plate_composition(plate_item)
{
    let result = null;
    let plate = items.plates[plate_item.get_id()];
    let flavor = plate.filling_opts[plate_item.get_flavor()];
    result = plate.name + " de " + flavor.name;
    return result;
}

function read_sauce_composition(sauce_item)
{
    let result = null;
    let sauce = items.sauces[sauce_item.get_id()];
    result = sauce.name;
    return result;
}

function create_item(id,type,quantity)
{
    let result = null;
    let checker = false;
    if(type < 3){
        switch(type){
            case 0:
                if(id < items.plates.length){
                    result = new Item(id,type);
                    checker = true;
                }
                break;
            case 1:
                if(id < items.sauces.length){
                    result = new Item(id,type)
                    checker = true;
                }
                break;
            case 2:
                if(id < items.parsleys.length){
                    result = new Item(id,type)
                    checker = true;
                }
                break;
        }
        if (checker == true) result.set_quantity(quantity);
    }
    return result;
}

function create_plate(id,flavor,quantity)
{
    let checker = false;
    let new_plate = create_item(id,0,quantity);
    if((id > -1) && (id < items.plates.length) &&
     (flavor > -1) && (flavor < items.plates[id].filling_opts.length)) {
        new_plate.set_flavor(flavor);

        new_plate.set_price((items.plates[id].price * 
            items.plates[id].filling_opts[flavor].pricer) * quantity);

        checker = true;
    }
    if(checker == false) new_plate = false;
    return new_plate;
}

function create_sauce(id,quantity)
{
    let checker = false;
    let new_sauce = create_item(id,1,quantity);
    if((id > -1) && (id < items.sauces.length)) {
        new_sauce.set_price(items.sauces[id].price * quantity);
        checker = true;
    }
    if(checker == false) new_sauce = null;
    return new_sauce;
}

function create_parsleys(id,quantity)
{
    let checker = false;
    let new_parsley = create_item(id,2,quantity);
    if((id > -1) && (id < items.parsleys.length)) {
        new_parsley.set_price(items.parsleys.price * quantity);
        checker = true;
    }
    if(checker == false) new_parsley = null;
    return new_parsley;
}


const items = {
    plates : [
        {
            name:"Ravioli",
            filling_opts:[{name:"Peperoni;",pricer:1},{name:"Ricota com espinafre;",pricer:2},
                {name:"Camarão;",pricer:1},
                {name:"Carne;",pricer:0},{name:"Gorgonzola;",pricer:0},
                {name:"Alcachofra;",pricer:0},{name:"Aspargo;",pricer:0},
                {name:"Salmão;",pricer:0},{name:"Trufa.",pricer:0.5}],
            description:"",
            price:60,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Conchiglioni",
            filling_opts:[{name:"Ricota, mussarela de buffala, pecorino, limão siciliano e molho de tomate.",pricer:0}],
            description:"",
            price:60,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Lasagna",
            filling_opts:[{name:"Quatro queijos",pricer:0},{name:"Camarão com gorgonzola",pricer:0},{name:"Berinjela",pricer:0}],
            description:"",
            price:60,
            prepare_time:{min:0,hours:0}
        }
    ],
    sauces : [
        {
            name:"Tomate fresco",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Bolognese",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Queijo",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        }
    ],
    parsleys : [
        {
            name:"Berinjela",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Abobrinha",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Sardela",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        },
        {
            name:"Caponata",
            description:"",
            price:20,
            prepare_time:{min:0,hours:0}
        }   
    ]
}