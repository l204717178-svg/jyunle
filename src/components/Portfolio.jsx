import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import coverTravel from '../assets/images/cover-travel.jpg'
import coverUrban from '../assets/images/cover-urban.jpg'
import coverDuolingo from '../assets/images/cover-duolingo.png'
import cover2021 from '../assets/images/cover-2021.jpg'
import coverFootball from '../assets/images/cover-football.jpg'

// 自动生成 24 张图片的路径数组 (g0.jpg 到 g23.jpg)
// 自动生成 24 张图片的路径数组 (g0.jpg 到 g23.jpg)
const galleryImages = Array.from({ length: 24 }, (_, i) => `/portfolio-gallery/g${i}.jpg`);

// Mock Data - Replace with actual user content
const projects = [
    {
        id: 1,
        title: "【2022年终总结】20岁的2023年会更好的吧",
        category: "Video",
        description: "养成记录习惯的好处大概就是在剪这个视频的时候能够再一次体会当时录制时候的心情 BGM：dinosaurs",
        image: coverUrban,
        videoUrl: "https://www.bilibili.com/video/BV1Ev4y1y797",
        bvid: "BV1Ev4y1y797",
        link: "https://www.bilibili.com/video/BV1Ev4y1y797"
    },
    {
        id: 2,
        title: "【2023年终总结】向前开，向前看",
        category: "Video",
        description: "一次穿越川西群山的视觉之旅，记录沿途的风景与感动。",
        image: coverTravel,
        videoUrl: "https://www.bilibili.com/video/BV17u4m1N7Ae",
        bvid: "BV17u4m1N7Ae",
        link: "https://www.bilibili.com/video/BV17u4m1N7Ae"
    },
    {
        id: 3,
        title: "多邻国产品体验报告及竞品分析",
        category: "Product",
        description: "多邻国的产品体验报告及竞品分析，深度剖析其游戏化学习机制。",
        image: coverDuolingo,
        link: "https://www.notion.so/19eb10f81b6a8031a61af319e705e1d7?source=copy_link"
    },
    {
        id: 4,
        title: "【2021年度总结】假如回溯时间.......",
        category: "Video",
        description: "2021年度总结视频，回顾这一年的点点滴滴。",
        image: cover2021,
        videoUrl: "https://www.bilibili.com/video/BV18m4y1U7FQ",
        bvid: "BV18m4y1U7FQ",
        link: "https://www.bilibili.com/video/BV18m4y1U7FQ"
    },
    {
        id: 5,
        title: "足迹",
        category: "Video",
        description: "是我们的三年，记录高中足球队全体队友的经历和足迹",
        image: coverFootball,
        videoUrl: "https://www.bilibili.com/video/BV1Cy4y1M7a4",
        bvid: "BV1Cy4y1M7a4",
        link: "https://www.bilibili.com/video/BV1Cy4y1M7a4"
    },
    {
        id: 6,
        title: "摄影作品集",
        category: "Photography",
        description: "光影瞬间的定格与思考，记录生活中的动静与生死。",
        image: "/portfolio-gallery/g0.jpg",
        images: galleryImages, // Uses all 24 images
        link: "#"
    }
]

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Portfolio = () => {
    const [selectedId, setSelectedId] = useState(null)
    const selectedProject = projects.find(p => p.id === selectedId)
    const [page, setPage] = useState(0)
    const [direction, setDirection] = useState(0)

    const paginate = (newDirection) => {
        if (!selectedProject?.images) return;
        const newPage = page + newDirection;
        if (newPage < 0 || newPage >= selectedProject.images.length) return;

        setPage(newPage);
        setDirection(newDirection);
    };

    const handleSelect = (id) => {
        setSelectedId(id)
        setPage(0)
        setDirection(0)
    }

    return (
        <section id="portfolio" className="section-padding container">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', textAlign: 'center' }}
            >
                作品集
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={`card-${project.id}`}
                        onClick={() => handleSelect(project.id)}
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '16/9',
                            position: 'relative'
                        }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.8)',
                                transition: 'filter 0.3s'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                        }}>
                            <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.category}</p>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.4rem', lineHeight: 1.3 }}>{project.title}</h3>
                            <p style={{ color: '#ddd', fontSize: '0.85rem', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div
                            onClick={() => setSelectedId(null)}
                            style={{ position: 'absolute', inset: 0, zIndex: -1 }}
                        />

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                height: 'auto',
                                maxHeight: '90vh',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    zIndex: 20,
                                    background: 'rgba(0,0,0,0.5)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '3rem',
                                    height: '3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ height: '60vh', position: 'relative', background: '#000', overflow: 'hidden', flex: 'none' }}>
                                {selectedProject.bvid ? (
                                    <iframe
                                        src={`//player.bilibili.com/player.html?bvid=${selectedProject.bvid}&page=1&high_quality=1&danmaku=0`}
                                        style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : selectedProject.images ? (
                                    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', touchAction: 'none' }}>
                                        <AnimatePresence initial={false} custom={direction}>
                                            <motion.img
                                                key={page}
                                                src={selectedProject.images[page]}
                                                custom={direction}
                                                variants={variants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                                    opacity: { duration: 0.2 }
                                                }}
                                                drag="x"
                                                dragConstraints={{ left: 0, right: 0 }}
                                                dragElastic={1}
                                                onDragEnd={(e, { offset, velocity }) => {
                                                    const swipe = swipePower(offset.x, velocity.x);

                                                    if (swipe < -swipeConfidenceThreshold) {
                                                        paginate(1);
                                                    } else if (swipe > swipeConfidenceThreshold) {
                                                        paginate(-1);
                                                    }
                                                }}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    cursor: 'grab',
                                                    touchAction: 'none',
                                                    zIndex: 1
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </AnimatePresence>

                                        {page > 0 && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                                                style={{
                                                    position: 'absolute',
                                                    left: '1rem',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    zIndex: 20,
                                                    background: 'rgba(0,0,0,0.5)',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '3rem',
                                                    height: '3rem',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                        )}
                                        {page < selectedProject.images.length - 1 && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); paginate(1); }}
                                                style={{
                                                    position: 'absolute',
                                                    right: '1rem',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    zIndex: 10,
                                                    background: 'rgba(0,0,0,0.5)',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '3rem',
                                                    height: '3rem',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        )}

                                        <div style={{
                                            position: 'absolute',
                                            bottom: '1rem',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(0,0,0,0.5)',
                                            borderRadius: '2rem',
                                            color: '#fff',
                                            fontSize: '0.9rem',
                                            zIndex: 10
                                        }}>
                                            {page + 1} / {selectedProject.images.length}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                )}
                            </div>

                            <div style={{ padding: '2rem', background: '#1a1a1a' }}>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}
                                >
                                    {selectedProject.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}
                                >
                                    {selectedProject.description}
                                </motion.p>

                                {selectedProject.link && selectedProject.link !== '#' && !selectedProject.bvid && (
                                    <motion.a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            borderRadius: '2rem',
                                            textDecoration: 'none',
                                            fontWeight: '500'
                                        }}
                                    >
                                        View Project <ExternalLink size={16} />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Portfolio
