import './Modal.css';

export default function Modal(props) {
    if(props.modalState === true) {
    return (
        <main className='modal-background'>
            <section className='modal-content'>
                <button onClick={props.handleClick}>Close modal</button>
            </section>
        </main>
    )} else {
        return (
            <div style={{display: "none"}}></div>
        );
    }
}