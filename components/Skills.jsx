// "use client";
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Skills() {
//   const skills = [
//     { id: 1, name: "React" },
//     { id: 2, name: "JavaScript" },
//     { id: 3, name: "HTML" },
//     { id: 4, name: "CSS" },
//     { id: 5, name: "NodeJS" },
//     { id: 6, name: "MongoDB" },
//     { id: 7, name: "ExpressJS" },
//     { id: 8, name: "Python" },
//     { id: 9, name: "C++" },
//     { id: 10, name: "C" },
//     { id: 11, name: "Java" },
//     { id: 13, name: "SQL" },
//     { id: 14, name: "Firebase" },
//     { id: 15, name: "HTML5" },

//     { id: 17, name: "Sass" },
//     { id: 18, name: "TypeScript" },
//     { id: 19, name: "Redux" },
//     { id: 20, name: "REST API" },
//   ];
//   return (
//     <div className="md:p-14 p-3">
//       <div className="text-4xl">Skills</div>
//       <div className="flex items-center justify-center  m-4">
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="w-full max-w-sm"
//         >
//           <CarouselContent>
//             {Array.from({ length: 12 }).map((_, index) => (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 <div className="p-1">
//                   <Card>
//                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                       <span className="text-3xl font-semibold">
//                         {index + 1}
//                       </span>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Skills() {
  const skills = [
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
    { id: 5, name: "NodeJS" },
    { id: 6, name: "MongoDB" },
    { id: 7, name: "ExpressJS" },
    { id: 8, name: "Python" },
    { id: 9, name: "C++" },
    { id: 10, name: "C" },
    { id: 11, name: "Java" },
    { id: 13, name: "SQL" },
    { id: 14, name: "Firebase" },
    { id: 15, name: "HTML5" },
    { id: 17, name: "Sass" },
    { id: 18, name: "TypeScript" },
    { id: 19, name: "Redux" },
    { id: 20, name: "REST API" },
  ];

  return (
    <div className="md:p-14 p-3">
      <div className="text-4xl mb-6">Skills</div>
      <div className="flex items-center justify-center  m-4">
        <Carousel opts={{ align: "start", loop: "true" }} className="w-full">
          <CarouselContent>
            {skills.map((skill) => (
              <CarouselItem
                key={skill.id}
                className="basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-[#848484] text-2xl">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Skills() {
//   const skills = [
//     { id: 1, name: "React" },
//     { id: 2, name: "JavaScript" },
//     { id: 3, name: "HTML" },
//     { id: 4, name: "CSS" },
//     { id: 5, name: "NodeJS" },
//     { id: 6, name: "MongoDB" },
//     { id: 7, name: "ExpressJS" },
//     { id: 8, name: "Python" },
//     { id: 9, name: "C++" },
//     { id: 10, name: "C" },
//     { id: 11, name: "Java" },
//     { id: 13, name: "SQL" },
//     { id: 14, name: "Firebase" },
//     { id: 15, name: "HTML5" },
//     { id: 17, name: "Sass" },
//     { id: 18, name: "TypeScript" },
//     { id: 19, name: "Redux" },
//     { id: 20, name: "REST API" },
//   ];

//   return (
//     <div className="md:p-14 p-3">
//       <div className="text-4xl">Skills</div>
//       <div className="flex items-center justify-center m-4">
//         <Carousel opts={{ align: "start" }} className="w-full max-w-lg">
//           <CarouselContent>
//             {skills.map((skill) => (
//               <CarouselItem key={skill.id} className="md:basis-1/2 lg:basis-1/3">
//                 <div className="p-1">
//                   <Card>
//                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                       <span className="text-3xl font-semibold">{skill.name}</span>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }
