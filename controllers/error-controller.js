const Error = require('../models/error')
const Checknumber = require('../helpers/checkNumber')
const Checkemail = require('../helpers/checkEmail')
const Whitespace = require('../helpers/findWhiteSpace')
class ControllerTodo {
    static cost(req, res, next) {
        const {
            prod_cost_temp_code,
            prod_cost_temp_name
        } = req.body
        let obj = {}
        if (!Whitespace(prod_cost_temp_code).length) {
            if (obj.err_crtbbt_cost_kode == undefined) {
                obj.err_crtbbt_cost_kode = []
            }
            obj.err_crtbbt_cost_kode.push('Kode tidak boleh kosong')
        }
        if (!Whitespace(prod_cost_temp_name).length) {
            if (obj.err_crtbbt_cost_nama == undefined) {
                obj.err_crtbbt_cost_nama = []
            }
            obj.err_crtbbt_cost_nama.push('Nama tidak boleh kosong')
        }
        if (prod_cost_temp_code.length > 6 && Whitespace(prod_cost_temp_code).length) {
            if (obj.err_crtbbt_cost_kode == undefined) {
                obj.err_crtbbt_cost_kode = []
            }
            obj.err_crtbbt_cost_kode.push('Kode tidak boleh lebih dari 6 karakter')
        }
        if (obj.err_crtbbt_cost_kode !== undefined || obj.err_crtbbt_cost_nama !== undefined) {
            res.status(400).json(obj)
        } else {
            res.send('sukses')
        }
    }
    static dokumen(req, res, next) {
        const {
            prod_doc_temp_code,
            prod_doc_temp_name,
            prod_doc_ctgry_temp_id
        } = req.body
        let obj = {}
        if (!Whitespace(prod_doc_temp_code).length) {
            if (obj.err_crtbbt_jendoc_kode == undefined) {
                obj.err_crtbbt_jendoc_kode = []
            }
            obj.err_crtbbt_jendoc_kode.push('Kode tidak boleh kosong')
        }
        if (!Whitespace(prod_doc_temp_name).length) {
            if (obj.err_crtbbt_jendoc_nama == undefined) {
                obj.err_crtbbt_jendoc_nama = []
            }
            obj.err_crtbbt_jendoc_nama.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(prod_doc_ctgry_temp_id).length) {
            if (obj.err_crtbbt_jendoc_katprod == undefined) {
                obj.err_crtbbt_jendoc_katprod = []
            }
            obj.err_crtbbt_jendoc_katprod.push('Pilih kategori produk')
        }
        if (prod_doc_temp_code.length > 8 && Whitespace(prod_doc_temp_code).length) {
            if (obj.err_crtbbt_jendoc_kode == undefined) {
                obj.err_crtbbt_jendoc_kode = []
            }
            obj.err_crtbbt_jendoc_kode.push('Kode tidak boleh lebih dari 8 karakter')
        }
        if (obj.err_crtbbt_jendoc_kode !== undefined || obj.err_crtbbt_jendoc_nama !== undefined || obj.err_crtbbt_jendoc_katprod !== undefined) {
            res.status(400).json(obj)
        } else {
            res.send('sukses')
        }
    }
    static bibiteUser(req, res, next) {
        const {
            bbt_user_temp_username,
            bbt_user_temp_password,
            bbt_emp_temp_name,
            bbt_emp_temp_gender,
            bbt_user_temp_email,
            bbt_user_temp_phone,
            bbt_group_temp_id,
            bbt_emp_temp_address
        } = req.body
        let obj = {}

        if (!Whitespace(bbt_user_temp_password).length) {
            if (obj.err_crtbbt_accusr_password == undefined) {
                obj.err_crtbbt_accusr_password = []
            }
            obj.err_crtbbt_accusr_password.push('Passowrd tidak boleh kosong')
        }
        if (!Whitespace(bbt_emp_temp_name).length) {
            if (obj.err_crtbbt_accusr_fullname == undefined) {
                obj.err_crtbbt_accusr_fullname = []
            }
            obj.err_crtbbt_accusr_fullname.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(bbt_user_temp_username).length) {
            if (obj.err_crtbbt_accusr_username == undefined) {
                obj.err_crtbbt_accusr_username = []
            }
            obj.err_crtbbt_accusr_username.push('Username tidak boleh kosong')
        }
        let spasi = /\s/;
        if (Whitespace(bbt_user_temp_username).length && spasi.test(bbt_user_temp_username)) {
            if (obj.err_crtbbt_accusr_username == undefined) {
                obj.err_crtbbt_accusr_username = []
            }
            obj.err_crtbbt_accusr_username.push('Username tidak boleh menggunakan spasi')
        }
        if (!Whitespace(bbt_user_temp_email).length) {
            if (obj.err_crtbbt_accusr_email == undefined) {
                obj.err_crtbbt_accusr_email = []
            }
            obj.err_crtbbt_accusr_email.push('Email tidak boleh kosong')
        }
        if (!Checkemail(bbt_user_temp_email) && Whitespace(bbt_user_temp_email).length) {
            if (obj.err_crtbbt_accusr_email == undefined) {
                obj.err_crtbbt_accusr_email = []
            }
            obj.err_crtbbt_accusr_email.push('Format email tidak benar')
        }
        if (!Whitespace(bbt_emp_temp_address).length) {
            if (obj.err_crtbbt_accusr_alamat == undefined) {
                obj.err_crtbbt_accusr_alamat = []
            }
            obj.err_crtbbt_accusr_alamat.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(bbt_emp_temp_gender).length) {
            if (obj.err_crtbbt_accusr_gender == undefined) {
                obj.err_crtbbt_accusr_gender = []
            }
            obj.err_crtbbt_accusr_gender.push('Pilih jenis kelamin')
        }
        if (!Whitespace(bbt_group_temp_id).length) {
            if (obj.err_crtbbt_accusr_grup_user == undefined) {
                obj.err_crtbbt_accusr_grup_user = []
            }
            obj.err_crtbbt_accusr_grup_user.push('Pilih grup user')
        }
        if (!Checknumber(bbt_user_temp_phone)) {
            if (obj.err_crtbbt_accusr_phone == undefined) {
                obj.err_crtbbt_accusr_phone = []
            }
            obj.err_crtbbt_accusr_phone.push('Format telepon wajib angkau')
        }
        if (bbt_user_temp_password.length < 6 && Whitespace(bbt_user_temp_password).length) {
            if (obj.err_crtbbt_accusr_password == undefined) {
                obj.err_crtbbt_accusr_password = []
            }
            obj.err_crtbbt_accusr_password.push('Password harus lebih dari 6 karakter')
        }
        if (bbt_user_temp_phone.length < 4) {
            if (obj.err_crtbbt_accusr_phone == undefined) {
                obj.err_crtbbt_accusr_phone = []
            }
            obj.err_crtbbt_accusr_phone.push('Nomer telepon harus lebih dari 3 karakter')
        }
        async function getData() {
                const axios = require('axios');
                var instance = axios.create({});
                return await instance.get(`https://go-restapi-bit-development.herokuapp.com/web-bibite/v-0.6/master/bibite-users`)
                    .then(({
                        data
                    }) => {

                        const result = data.data.find(({
                            bbt_username
                        }) => bbt_username === bbt_user_temp_username);

                        if (result == undefined) {
                            return false
                        } else {
                            return true
                        }

                        // res.status(200).json(data)
                    })
                    .catch(next)
            }
            (async () => {

                if (await getData() == true) {
                    if (obj.err_crtbbt_accusr_username == undefined) {
                        obj.err_crtbbt_accusr_username = []
                    }
                    obj.err_crtbbt_accusr_username.push('Username sudah terdaftar')
                }

                if (obj.err_crtbbt_accusr_password !== undefined || obj.err_crtbbt_accusr_fullname !== undefined || obj.err_crtbbt_accusr_grup_user !== undefined || obj.err_crtbbt_accusr_alamat !== undefined || obj.err_crtbbt_accusr_username !== undefined || obj.err_crtbbt_accusr_phone !== undefined || obj.err_crtbbt_accusr_gender !== undefined) {
                    res.status(400).json(obj)
                } else {
                    res.send('sukses')
                }
            })()
    }
    static bibiteAdmin(req, res, next) {

        const {
            bbt_adm_temp_username,
            bbt_adm_temp_password,
            bbt_emp_temp_name,
            bbt_emp_temp_gender,
            bbt_adm_temp_email,
            bbt_adm_temp_phone,
            bbt_group_temp_id,
            bbt_emp_temp_address
        } = req.body
        let obj = {}

        if (!Whitespace(bbt_adm_temp_password).length) {
            if (obj.err_crtbbt_admin_password == undefined) {
                obj.err_crtbbt_admin_password = []
            }
            obj.err_crtbbt_admin_password.push('Passowrd tidak boleh kosong')
        }
        if (!Whitespace(bbt_emp_temp_name).length) {
            if (obj.err_crtbbt_admin_fullname == undefined) {
                obj.err_crtbbt_admin_fullname = []
            }
            obj.err_crtbbt_admin_fullname.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(bbt_adm_temp_username).length) {
            if (obj.err_crtbbt_admin_username == undefined) {
                obj.err_crtbbt_admin_username = []
            }
            obj.err_crtbbt_admin_username.push('Username tidak boleh kosong')
        }
        let spasi = /\s/;
        if (Whitespace(bbt_adm_temp_username).length && spasi.test(bbt_adm_temp_username)) {
            if (obj.err_crtbbt_admin_username == undefined) {
                obj.err_crtbbt_admin_username = []
            }
            obj.err_crtbbt_admin_username.push('Username tidak boleh menggunakan spasi')
        }
        if (!Whitespace(bbt_adm_temp_email).length) {
            if (obj.err_crtbbt_admin_email == undefined) {
                obj.err_crtbbt_admin_email = []
            }
            obj.err_crtbbt_admin_email.push('Email tidak boleh kosong')
        }
        if (!Checkemail(bbt_adm_temp_email) && Whitespace(bbt_adm_temp_email).length) {
            if (obj.err_crtbbt_admin_email == undefined) {
                obj.err_crtbbt_admin_email = []
            }
            obj.err_crtbbt_admin_email.push('Format email tidak benar')
        }
        if (!Whitespace(bbt_emp_temp_address).length) {
            if (obj.err_crtbbt_admin_alamat == undefined) {
                obj.err_crtbbt_admin_alamat = []
            }
            obj.err_crtbbt_admin_alamat.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(bbt_emp_temp_gender).length) {
            if (obj.err_crtbbt_admin_gender == undefined) {
                obj.err_crtbbt_admin_gender = []
            }
            obj.err_crtbbt_admin_gender.push('Pilih jenis kelamin')
        }
        if (!Whitespace(bbt_group_temp_id).length) {
            if (obj.err_crtbbt_admin_grup_user == undefined) {
                obj.err_crtbbt_admin_grup_user = []
            }
            obj.err_crtbbt_admin_grup_user.push('Pilih grup user')
        }
        if (!Checknumber(bbt_adm_temp_phone)) {
            if (obj.err_crtbbt_admin_phone == undefined) {
                obj.err_crtbbt_admin_phone = []
            }
            obj.err_crtbbt_admin_phone.push('Format telepon wajib angkau')
        }
        if (bbt_adm_temp_password.length < 6 && Whitespace(bbt_adm_temp_password).length) {
            if (obj.err_crtbbt_admin_password == undefined) {
                obj.err_crtbbt_admin_password = []
            }
            obj.err_crtbbt_admin_password.push('Password harus lebih dari 6 karakter')
        }
        if (bbt_adm_temp_phone.length < 4) {
            if (obj.err_crtbbt_admin_phone == undefined) {
                obj.err_crtbbt_admin_phone = []
            }
            obj.err_crtbbt_admin_phone.push('Nomer telepon harus lebih dari 3 karakter')
        }
        async function getData() {
                const axios = require('axios');
                var instance = axios.create({});
                return await instance.get(`https://go-restapi-bit-development.herokuapp.com/web-bibite/v-0.6/master/bibite-adms`)
                    .then(({
                        data
                    }) => {


                        const result = data.data.find(({
                            bbt_adm_username
                        }) => bbt_adm_username === bbt_adm_temp_username);

                        if (result == undefined) {
                            return false
                        } else {
                            return true
                        }

                        // res.status(200).json(data)
                    })
                    .catch(next)
            }
            (async () => {

                if (await getData() == true) {
                    if (obj.err_crtbbt_admin_username == undefined) {
                        obj.err_crtbbt_admin_username = []
                    }
                    obj.err_crtbbt_admin_username.push('Username sudah terdaftar')
                }

                if (obj.err_crtbbt_admin_password !== undefined || obj.err_crtbbt_admin_fullname !== undefined || obj.err_crtbbt_admin_grup_user !== undefined || obj.err_crtbbt_admin_alamat !== undefined || obj.err_crtbbt_admin_username !== undefined || obj.err_crtbbt_admin_phone !== undefined || obj.err_crtbbt_admin_gender !== undefined) {
                    res.status(400).json(obj)
                } else {
                    res.send('sukses')
                }
            })()
    }
    static grupUser(req, res, next) {
        const {
            bbt_group_temp_code,
            bbt_group_temp_name,
            bbt_group_temp_role,
            hakAksesSelected
        } = req.body
        let obj = {}
        // if (!Whitespace(bbt_group_temp_code).length) {
        //     if (obj.err_crtbbt_grpusr_kode == undefined) {
        //         obj.err_crtbbt_grpusr_kode = []
        //     }
        //     obj.err_crtbbt_grpusr_kode.push('Kode tidak boleh kosong')
        // }
        if (!Whitespace(hakAksesSelected).length) {
            if (obj.err_crtbbt_grpusr_peran == undefined) {
                obj.err_crtbbt_grpusr_peran = []
            }
            obj.err_crtbbt_grpusr_peran.push('Pilih peran')
        }
        if (!Whitespace(bbt_group_temp_role).length) {
            if (obj.err_crtbbt_grpusr_hak_akses_grup == undefined) {
                obj.err_crtbbt_grpusr_hak_akses_grup = []
            }
            obj.err_crtbbt_grpusr_hak_akses_grup.push("Pilih hak akses grup", "Hak akses grup tidak boleh kosong")
        }
        if (!Whitespace(bbt_group_temp_code).length) {
            if (obj.err_crtbbt_grpusr_kode == undefined) {
                obj.err_crtbbt_grpusr_kode = []
            }
            obj.err_crtbbt_grpusr_kode.push('Kode tidak boleh kosong')
        }
        if (!Whitespace(bbt_group_temp_name).length) {
            if (obj.err_crtbbt_grpusr_nama == undefined) {
                obj.err_crtbbt_grpusr_nama = []
            }
            obj.err_crtbbt_grpusr_nama.push('Nama tidak boleh kosong')
        }
        if (bbt_group_temp_code.length > 8 && Whitespace(bbt_group_temp_code).length) {
            if (obj.err_crtbbt_grpusr_kode == undefined) {
                obj.err_crtbbt_grpusr_kode = []
            }
            obj.err_crtbbt_grpusr_kode.push('Kode tidak boleh lebih dari 7 huruf')
        }
        if (bbt_group_temp_code.length < 3 && Whitespace(bbt_group_temp_code).length) {
            if (obj.err_crtbbt_grpusr_kode == undefined) {
                obj.err_crtbbt_grpusr_kode = []
            }
            obj.err_crtbbt_grpusr_kode.push('Kode harus lebih dari 2 huruf')
        }
        if (obj.err_crtbbt_grpusr_kode !== undefined || obj.err_crtbbt_grpusr_nama !== undefined || obj.err_crtbbt_grpusr_hak_akses_grup || obj.err_crtbbt_grpusr_peran) {
            res.status(400).json(obj)
        } else {
            res.send('sukses')
        }
    }
    static promo(req, res, next) {
        const {
            referal_temp_name,
            referal_temp_desc,
            referal_temp_image,
            referal_temp_program,
            referal_temp_date_active_finish,
            referal_temp_date_active_start,
            referal_temp_quota
        } = req.body
        let obj = {}
        if (!Whitespace(referal_temp_image).length) {
            if (obj.err_crtbbt_promo_img == undefined) {
                obj.err_crtbbt_promo_img = []
            }
            obj.err_crtbbt_promo_img.push('Gambah Promo tidak boleh kosong')
        }
        console.log(referal_temp_image, "image")
        if (!Whitespace(referal_temp_name).length) {
            if (obj.err_crtbbt_promo_nama == undefined) {
                obj.err_crtbbt_promo_nama = []
            }
            obj.err_crtbbt_promo_nama.push('Nama tidak boleh kosong')
        }
        if (!Whitespace(referal_temp_program).length) {
            if (obj.err_crtbbt_promo_program == undefined) {
                obj.err_crtbbt_promo_program = []
            }
            obj.err_crtbbt_promo_program.push('Program tidak boleh kosong')
        }
        if (!Whitespace(referal_temp_quota).length) {
            if (obj.err_crtbbt_promo_kuota == undefined) {
                obj.err_crtbbt_promo_kuota = []
            }
            obj.err_crtbbt_promo_kuota.push('Kuota tidak boleh kosong')
        }
        if (!Checknumber(referal_temp_quota)) {
            if (obj.err_crtbbt_promo_kuota == undefined) {
                obj.err_crtbbt_promo_kuota = []
            }
            obj.err_crtbbt_promo_kuota.push('Kuota wajib numeric')
        }

        if (referal_temp_image.length > 8 && Whitespace(referal_temp_image).length) {
            if (obj.err_crtbbt_promo_img == undefined) {
                obj.err_crtbbt_promo_img = []
            }
            obj.err_crtbbt_promo_img.push('Kode tidak boleh lebih dari 8 karakter')
        }
        if (obj.err_crtbbt_promo_img !== undefined || obj.err_crtbbt_promo_nama !== undefined || obj.err_crtbbt_promo_program !== undefined || obj.err_crtbbt_promo_img !== undefined || obj.err_crtbbt_promo_program !== undefined) {
            res.status(400).json(obj)
        } else {
            res.send('sukses')
        }
    }


}
module.exports = ControllerTodo