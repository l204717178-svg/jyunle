import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Get in Touch</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        我目前正在寻找产品经理方向的工作机会。无论您有任何问题，或者只是想打个招呼，请联系我。
                    </p>
                    <a
                        href="mailto:l1204717178@outlook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        l1204717178@outlook.com
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
