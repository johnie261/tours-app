import Title from "./Title"
import { services } from "../pageLinks"
const Service = () => {
    return (
    <section className="section services" id="services">
      <Title Title={'our'} subTitle={'services'} />
      <div className="section-center services-center">
      {services.map((service) => {
            const {id, title, icon, text} = service;
            return (
            <article className="service" key={id}>
                <span className="service-icon"><i className={icon}></i></span>
                <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text"> {text}</p>
                </div>
            </article>
            )
         })}
      </div>
    </section>
    )
}

export default Service