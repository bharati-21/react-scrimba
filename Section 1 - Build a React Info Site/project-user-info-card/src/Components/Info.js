export default function Info() {
    return (
        <header className="user-info">
            <div className="user-info--image"></div>
            <h2 className="user-info--name">Bharati Subramanian</h2>
            <p className="user-info--role">Frontend Developer</p>
            <a href="https://bharati-21.github.io/" className="user-info--website">bharat-21.github.io</a>
            <div className="user-info--buttons">
                <a href="mailto:bharatisharada@gmail.com" className="btn btn-primary user-info--email-btn">
                    <span className="user-info--btn--icon">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="user-info--btn--text">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/bharati-subramanian-29734b152/" className="btn btn-secondary user-info--linkedin-btn">
                     <span className="user-info--btn--icon">
                        <i className="fab fa-linkedin"></i>
                    </span>
                    <span className="user-info--btn--text">LinkedIn</span>
                </a>
            </div>
        </header>
    )
}