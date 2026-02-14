import { motion } from 'framer-motion'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <nav style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.05em' }}>JyunLe</div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#about" style={{ fontSize: '0.9rem' }}>About</a>
                    <a href="#experience" style={{ fontSize: '0.9rem' }}>Experience</a>
                    <a href="#skills" style={{ fontSize: '0.9rem' }}>Skills</a>
                    <a href="#portfolio" style={{ fontSize: '0.9rem' }}>Portfolio</a>
                    <a href="#contact" style={{ fontSize: '0.9rem' }}>Contact</a>
                </div>
            </nav>
            <main>{children}</main>
            <footer style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                opacity: 0.5,
                fontSize: '0.8rem',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '4rem'
            }}>
                &copy; {new Date().getFullYear()} JyunLe. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout
