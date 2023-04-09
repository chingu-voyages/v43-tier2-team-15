import styles from "./Thank_you_pop_up.module.css";

export default function ThankYouPopUp() {
    return (
        <div className="flex items-center justify-center mt-48">
            <div className=" w-1/2 bg-yellow-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg max-w-screen-lg mx-auto flex" src="./src/assets/images/ion_checkmark-done-circle-outline.png" alt="" />
                </a>
                <div className="p-5 text-center">
                    <p className="mb-3 font-bold text-4xl text-gray-700 dark:text-gray-400">Thank you for making an order!</p>
                    <p className="mb-3 font-normal text-4xl text-gray-700 dark:text-gray-400">You can track your order by this code : 456454</p>
                    <a href="#" className=" bg-btn h-16 w-1/2 inline-flex items-center justify-center text-center py-2 text-sm font-medium text-white bg-orange-400 rounded-lg hover:bg-white focus:ring-4 focus:outline-none hover:text-orange-400 hover:border border-orange-400">
                    Continue shopping                      
                    </a>
                </div>
            </div>
        </div>
    );
}
