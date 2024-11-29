"use client"

import HoverEffect from '@/components/ui/card-hover-effect';
import "bootstrap/dist/css/bootstrap.min.css";

export default function page() {
    return (
        <>
        <div className='bg-black'>
        <div className="container">
            <div className="row">
                <div className="col-12 pt-10">
                    <div className="h-auto">
                    <div className="text-white text-center text-4xl font-bold">
                    Resources I utilized
                    </div>
                    </div>
                </div>
                <div className="col-12 p-4">
                <HoverEffect
      items={[
        {
          title: "100+ Javascript Concepts",
          description:
            "",
          link: "",
          video: "https://www.youtube.com/embed/lkIFF4maKMU?si=TxPm4dOemJ7HpEoz", // Replace with YouTube embed URL
        },
        {
          title: "TypeScript in React",
          description:
            "",
          link: "",
          video: "https://www.youtube.com/embed/TPACABQTHvM?si=W7iVquy756gWMQ1Y", // Replace with YouTube embed URL
        },
        {
            title: "Next.JS tutorial",
            description:
              "",
            link: "",
            video: "https://www.youtube.com/embed/ZVnjOPwW4ZA?si=E-UvCp2kfX1MuSr", // Replace with YouTube embed URL
          },
          {
            title: "MERN Crash Course",
            description:
              "",
            link: "",
            video: "https://www.youtube.com/embed/O3BUHwfHf84?si=B8CpcvBEUjbvtoYc", // Replace with YouTube embed URL
          },
          {
            title: "Learning Web Development",
            description:
              "",
            link: "",
            video: "https://www.youtube.com/embed/TG6XSFeOT3g?si=Om6rgPRMzHakE92b", // Replace with YouTube embed URL
          },
          {
              title: "100+ Web Development Concepts",
              description:
                "",
              link: "",
              video: "https://www.youtube.com/embed/erEgovG9WBs?si=svaqFElsqhKlMkKb", // Replace with YouTube embed URL
            },
      ]}
    />
                </div>
            </div>
        </div>
        </div>
        </>
      )
    }

