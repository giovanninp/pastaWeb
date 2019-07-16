class Address {
    #country;
    #state;
    #city;
    #neighbor;
    #street;
    #local_num;
    #block;
    #apt_num;
    #postal_num;
    #observation;
    constructor(){
        this.#country = null;
        this.#state = null;
        this.#city = null;
        this.#neighbor = null;
        this.#street = null;
        this.#local_num = null;
        this.#block = null;
        this.#apt_num = null;
        this.#postal_num = null;
        this.#observation = null;
    }
    //Setters:
    set_country(country)
    {
        this.#country = country;
    }
    set_state(state)
    {
        this.#state = state;
    }
    set_city(city)
    {
        this.#city = city;
    }
    set_neighbor(neighbor)
    {
        this.#neighbor = neighbor;
    }
    set_street(street)
    {
        this.#street = street;
    }
    set_local_num(local_num)
    {
        this.#local_num = local_num;
    }
    set_block(block)
    {
        this.#block = block;
    }
    set_apt_num(apt_num)
    {
        this.#apt_num = apt_num;
    }
    set_observation(observation)
    {
        this.#observation = observation;
    }

    //Getters:
    get_country()
    {
        return this.#country;
    }
    get_state()
    {
        return this.#state;
    }
    get_neighbor()
    {
        return this.#neighbor;
    }
    get_street()
    {
        return this.#street;
    }
    get_local_num()
    {
        return this.#local_num;
    }
    get_block(block)
    {
        return this.#block;
    }
    get_apt_num(apt_num)
    {
        return this.#apt_num;
    }
    get_observation(observation)
    {
        return this.#observation;
    }
}