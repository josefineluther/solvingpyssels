import { Card } from '@/components/ui/card'
import Image from 'next/image'

const projects = [
    {
        index: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        image: null,
    },
    {
        index: 2,
        name: 'Project 2',
        description: 'Description for Project 2',
        image: null,
    },
    {
        index: 3,
        name: 'Project 3',
        description: 'Description for Project 3',
        image: null,
    },
    {
        index: 4,
        name: 'Project 4',
        description: 'Description for Project 4',
        image: null,
    },
    {
        index: 5,
        name: 'Project 5',
        description: 'Description for Project 5',
        image: null,
    },
    {
        index: 6,
        name: 'Project 6',
        description: 'Description for Project 6',
        image: null,
    },
]

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-start py-32 px-16 bg-white">
            <h1>Solving Pyssels</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {projects.map((project) => (
                    <Card className="p-6" key={project.index}>
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                className="w-full h-full object-cover object-center"
                                src={
                                    project.image
                                        ? project.image
                                        : '/images/default.jpg'
                                }
                                alt={project.name}
                                width={300}
                                height={300}
                            />
                        </div>
                        <h2 className="mt-2 text-lg font-bold">
                            {project.name}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            {project.description}
                        </p>
                    </Card>
                ))}
            </div>
        </main>
    )
}
