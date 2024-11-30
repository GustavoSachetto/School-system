import { Course } from "@/types";
import { ReactNode } from "react";
import { Card } from "@/Components/Ui";
import { Link } from "@inertiajs/react";

export type CourseProps = { 
  course: Course 
}

export function CardCourse({ course }: CourseProps): ReactNode {
  return (
    <Card.Root>
      <Card.Image src={course.image_url} />
      <Card.Content>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.requirement}
        </Card.Text>
      </Card.Content>
      <Card.Footer>
        <Link href={`/course/view/${course.title}`}>Saiba mais</Link>
      </Card.Footer>
    </Card.Root>
  )
}

export type CollectionCoursesProps = {
  courses: Array<Course>
}

export function CollectionCardCourse({ courses }: CollectionCoursesProps): ReactNode {
  return courses.length > 0 ? courses?.map((course) =>
    <CardCourse key={course.id} course={course} /> 
  ) : (
    <span className="text-[16px]">Nenhum curso encontrado.</span>
  )
}