import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-start py-32 px-16 bg-white">
            <h1>Solving Pyssels</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                <Card className="p-6">
                    <div className="relative aspect-square overflow-hidden">
                        <Image
                            className="w-full h-full object-cover object-center"
                            src="/images/default.jpg"
                            alt="Project 1"
                            width={300}
                            height={300}
                        />
                    </div>
                    <h2 className="mt-2 text-lg font-bold">Project 1</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
                <Card className="p-6">
                    <h2 className="mt-2 text-lg font-bold">Project 2</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
                <Card className="p-6">
                    <h2 className="mt-2 text-lg font-bold">Project 3</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
                <Card className="p-6">
                    <h2 className="mt-2 text-lg font-bold">Project 4</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
                <Card className="p-6">
                    <h2 className="mt-2 text-lg font-bold">Project 5</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
                <Card className="p-6">
                    <h2 className="mt-2 text-lg font-bold">Project 6</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        About project
                    </p>
                </Card>
            </div>
        </main>
    )
}
