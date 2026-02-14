import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <span style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-tertiary)',
                        marginBottom: '1rem'
                    }}>
                        Philosophy
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        lineHeight: 1.2,
                        marginBottom: '3rem'
                    }}>
                        人生 SOP: 从热爱的原点，到价值的终点
                    </h2>

                    <div style={{
                        paddingLeft: '2rem',
                        borderLeft: '2px solid var(--border-subtle)'
                    }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>
                            我一直相信，最好的成长路径是：<br />
                            <strong style={{ color: 'var(--text-primary)', fontSize: '1.4rem', display: 'block', marginTop: '1rem' }}>爱好 —— 技能 —— 成果</strong>
                        </p>
                        <p style={{ lineHeight: 1.8, color: 'var(--text-tertiary)', fontSize: '1.05rem' }}>
                            我尽我所能，将生命中每一份纯粹的热爱，通过系统化的刻意练习沉淀为可量化的技能，最终交付出成果。这就是此刻“跨界”但“统一”的我。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
