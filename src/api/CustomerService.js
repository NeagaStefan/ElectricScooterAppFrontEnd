import axios from "axios";
const CUSTOMER_URL="http://localhost:8088";

class CustomerService {
    getCustomer () {
        return axios.get(CUSTOMER_URL+"/customers");
    }
    saveCustomer(customer){
        return axios.post(CUSTOMER_URL+'/customers', customer);
    }

    updateCustomer(customerId, customer) {
        return axios.post(CUSTOMER_URL+`/customers/${customerId}`,customer)
    }

    getCustomerById(customerId) {
        return axios.get(CUSTOMER_URL+`/customers/${customerId}`)
    }

    deleteCustomerById(customerId) {
        return axios.delete(CUSTOMER_URL+`/customers/${customerId}`)
    }
    getCustomerByFirstName(firstName) {
        return axios.get(CUSTOMER_URL+`/customers/firstname/${firstName}`)
    }
    getCustomerByLastName(lastName) {
        return axios.get(CUSTOMER_URL+`/customers/lastname/${lastName}`)
    }
    getCustomerByEmail(email) {
        return axios.get(CUSTOMER_URL+`/customers/email/${email}`)
    }

}

export default new CustomerService()