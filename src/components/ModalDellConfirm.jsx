
function ModalDellConfirm({dellConfirmModal,removeTermin,cancelConfirm}){
    return(
        <>
            {dellConfirmModal && 
                <div className="delConfirmModal w3-animate-right"> 
                    <p className="confirmText">Are you sure?</p>
                    <button className="confirmNo" onClick={cancelConfirm}>No</button>
                    <button className="confirmYes" onClick={removeTermin}>Yes</button>
                </div>
            }
        </>
    )
}

export default ModalDellConfirm;