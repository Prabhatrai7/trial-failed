import'./FindStore.css';

const FindStore = () => {
    return (
        <div className='store-container' id='findStore'>
            <div className='header-start'>FIND OU<div className='header-end'>R STORE</div></div>
            <div className='store-section'>
                <div className='address'>
                    <h3>Address:</h3>
                    <div className='address-info'>
                        <p>N11/111 R-2 Ranipur, Mahmoorganj</p>
                        <p>Varanasi, Uttar Pradesh</p>
                        <p>India</p>
                        <p>Pincode: 221010</p>
                    </div>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe className="gmap_iframe" title='find-store' width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Varanasi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default FindStore;