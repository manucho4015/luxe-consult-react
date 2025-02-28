import { motion } from 'framer-motion'

const Download = () => {

    const downloadPdf = async () => {
        // using Java Script method to get PDF file
        fetch('/profile_compressed.pdf').then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                const pdfLink = document.createElement("a");
                pdfLink.href = fileURL;
                pdfLink.download = 'LUXE CONSULT BUSINESS PROFILE.pdf';
                pdfLink.click();
            });
        });
    };
    return (
        <div className="mt-[25px] h-[20vh] md:h-[30vh] min-h-[176px] inline-flex w-full md:flex-row flex-col justify-center items-center text-white
            bg-linear-to-r from-[#EEC7A2] to-[#000] mb-[25px]">
            <h3 className="uppercase md:mr-[30px] md:mb-0 mb-[10px]">download our company & services profile</h3>
            <motion.button onClick={downloadPdf} whileTap={{ scale: .95 }} className='uppercase bg-primary rounded-md w-[200px] h-[50px]
                    flex items-center justify-center text-[16px]'>
                download <img src="/download-white.svg" alt="download" className="ml-[10px] max-w-[30px] max-h-[20px] h-[15vh] w-[30vh]" />
            </motion.button>
        </div>
    )
}

export default Download
