import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Hero = () => {
    return (
        <section className="hero section-padding" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '0 1rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    fontWeight: '800',
                    lineHeight: 1.1,
                    letterSpacing: '-0.04em',
                    marginBottom: '1rem',
                    paddingBottom: '0.2em'
                }}>
                    HELLO, I'M <br />
                    <span style={{
                        background: 'linear-gradient(to right, #fff 20%, #666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        paddingBottom: '0.1em'
                    }}>JyunLe</span>
                </h1>
            </motion.div>

            {/* Schools Section Moved Here */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                    marginTop: '2rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.5rem', borderRadius: '50px', border: '1px solid var(--border-subtle)' }}>
                    <GraduationCap size={20} color="var(--accent-primary)" />
                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>CityU HK</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.5rem', borderRadius: '50px', border: '1px solid var(--border-subtle)' }}>
                    <GraduationCap size={20} color="var(--accent-secondary)" />
                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>UESTC</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    marginTop: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    maxWidth: '600px',
                    margin: '1rem auto 0'
                }}
            >
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>你好呀！这里是李隽乐 😃</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span>作为一名</span>
                    <span>国家一级运动员⚽</span>
                    <span>工科专业👨🏻‍🎓</span>
                    <span>影像创作者📸</span>
                    <span>励志做一名产品经理的应届生</span>
                </div>
                <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.8 }}>我在这里分享关于我的一切</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{ marginTop: '5rem' }}
            >
                <div style={{
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, var(--text-tertiary), transparent)',
                    margin: '0 auto'
                }}></div>
            </motion.div>
        </section>
    )
}

export default Hero
