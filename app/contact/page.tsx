'use client'

export default function Contact() {

const submitForm = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwItWqcyry7aYtJSpPnqJrbtkYd02H3L4R1Wb52I_ZMucHncxiY9F_2o74X_a0QLMdz/exec';

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const companyNameInput = document.getElementById('company-name') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const companyNameValue = companyNameInput.value;
    const phoneValue = phoneInput.value;
    const messageValue = messageInput.value;

    const formData = new FormData();
    formData.append('name', nameValue);
    formData.append('email', emailValue);
    formData.append('company-name', companyNameValue);
    formData.append('phone', phoneValue);
    formData.append('message', messageValue);

    try {
        const response = await fetch(url, {
        method: 'POST',
        body: formData,
        });

        if (response.ok) {
        console.log('Form data submitted successfully');
        } else {
        console.error('Failed to submit form data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-40 lg:py-20 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Get in Touch and Expand Your Artistry Across Continents with Chapter 2 Entertainment LLP.</p>
            <form action="#" onSubmit={submitForm} className="space-y-8">
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your Email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Company Name</label>
                    <input type="text" id="company-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Company" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+34 123-45-678" pattern="\+34 \d{3}-\d{2}-\d{3}" required />
                </div>
                <div className="sm:col-span-2">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Nature of Enquiry</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 border-2 border-purple-600">
                    Contact
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}