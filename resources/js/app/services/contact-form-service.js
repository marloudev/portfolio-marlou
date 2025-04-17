import axios from "axios";

export async function get_contact_form_service() {
    try {
        const res = await axios.get("/api/contact_form");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_contact_form_by_id_service(id) {
    try {
        const res = await axios.get(`/api/contact_form/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_contact_form_service(data) {
    try {
        const res = await axios.post('/api/contact_form', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_contact_form_service(data) {
    try {
        const res = await axios.put(`/api/contact_form/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_contact_form_service(id) {
    try {
        const res = await axios.delete(`/api/contact_form/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}