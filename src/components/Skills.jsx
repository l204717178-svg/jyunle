import { motion } from 'framer-motion'

const SkillBar = ({ name, value, color }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <span>{name}</span>
            <span style={{ color: 'var(--text-tertiary)' }}>{value}%</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ height: '100%', background: color || 'var(--text-primary)' }}
            />
        </div>
    </div>
)

const Skills = () => {
    return (
        <section id="skills" className="section-padding container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {/* Skills Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Skillset</h3>
                    <SkillBar name="Photoshop" value={80} color="#31A8FF" />
                    <SkillBar name="Lightroom" value={90} color="#31A8FF" />
                    <SkillBar name="Premiere" value={85} color="#9999FF" />
                    <SkillBar name="Fitness" value={60} color="#FF9966" />
                </motion.div>

                {/* Achievements Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Achievements</h3>

                    <div style={{ marginBottom: '3rem' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Visual / Film</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', lineHeight: 2 }}>
                            <li>🏆 高校影视作品交流展映活动 一等奖</li>
                            <li>🥇 中华优秀传统文化视听作品推选展播活动 一等奖</li>
                            <li>🥉 四川省大学生广播艺术大赛 三等奖</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Football</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', lineHeight: 2 }}>
                            <li>⚽️ 国家一级运动员</li>
                            <li>🏆 四川省第三届“贡嘎杯”青少年校园体育联赛 冠军</li>
                            <li>🥉 2024年世界大学生五人制足球锦标赛热身赛暨2023年大学生五人制足球邀请赛 第三名</li>
                            <li>🌟 四川省第四届“贡嘎杯”青少年校园体育联赛总决赛 最佳运动员</li>
                            <li>✨ 2023年中国大学生五人制足球联赛（男子组南区） 第四名</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
