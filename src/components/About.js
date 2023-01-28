import { React } from "react";
import data from "../data/about-data.js";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  console.log(data);
  return (
    <div class="bg-color">
      <p class="main-heading">About Us</p>
      <p class="paragraph">
        Indelect Technologies Pvt.Ltd. established in the year 1995 by the
        Technocrats having over 18 years of combined expertise in technology and
        mentoring experience in advanced areas of Biomedical Engineering,
        Medical Imaging Technology & Power Electronics.Indelect, over these
        years has acclaimed a high reputation in the international markets apart
        from serving the domestic Indian market. With a sustainable and
        consistently growing progress, Indelect Technologies Pvt. Ltd. has
        evolved into a dominant player in the distribution of Biomedical,
        Medical Imaging & Power Electronic equipments. The organization has
        expanded vastly in its length and breadth and has its foot firmly
        grounded to diverse activities.
      </p>
      <p class="sub-heading">Indelect's Journey </p>
      {/* <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Milestone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.year}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {data.map((item, index) => {
        return (
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={item.year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title"></h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        )
      })}

    </div>
  );
};

export default About;
