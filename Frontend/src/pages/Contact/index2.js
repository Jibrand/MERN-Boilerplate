import Header from '../../components/Header'
import Footer from '../../components/footer'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Index2 = () => {
    const params = useParams()
    const [fulname, setFullname] = useState('')
    const [email, setemail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/contact/singledata/${params.id}`);
                console.log(response.data)
                setemail(response.data.contact.email)
                setFullname(response.data.contact.fulname)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async () => {
        const response = await axios.put(`http://localhost:3001/contact/updtcontact/${params.id}`, { fulname, email });
        toast.success('Updated successful!');
    }

    return (
        <div>
            <Header />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-gray-900">UPDATE HERE</h1>
                        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={fulname}
                                onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Update</button>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
            <Footer />
            <Toaster />
        </div>
    )
}

export default Index2
