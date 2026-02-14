import { motion } from 'framer-motion'

const TimelineItem = ({ date, title, subtitle, description, isLeft }) => (
    <div style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        position: 'relative',
        width: '50%',
        alignSelf: isLeft ? 'flex-start' : 'flex-end',
        padding: '0 2rem',
        marginBottom: '4rem'
    }}>
        <div style={{
            position: 'absolute',
            [isLeft ? 'right' : 'left']: '-6px',
            top: '0',
            width: '12px',
            height: '12px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            boxShadow: '0 0 0 4px var(--bg-tertiary)'
        }} />

        <motion.div
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
                textAlign: isLeft ? 'right' : 'left',
                maxWidth: '400px'
            }}
        >
            <span style={{
                color: 'var(--accent-primary)',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '0.5rem'
            }}>{date}</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '500' }}>{subtitle}</div>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{description}</p>
        </motion.div>
    </div>
)

const Experience = () => {
    return (
        <section id="experience" className="section-padding container">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}
            >
                My Journey
            </motion.h2>

            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {/* Center Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '100%',
                    background: 'var(--border-subtle)'
                }} />

                <TimelineItem
                    isLeft={true}
                    date="2025.12 - Present"
                    title="Vivix (灵动科技)"
                    subtitle="产品运营实习生"
                    description="针对模型训练中抽象需求难以匹配平台内容痛点，设计内容场景映射方法论；针对基座模型形似神不似痛点，设计验证了20条素材+0.6%参数的LoRA技术路径。"
                />

                <TimelineItem
                    isLeft={false}
                    date="2025.09 - 2026.10"
                    title="City University of Hong Kong"
                    subtitle="机械工程 (硕士)"
                    description="QS 前 100 高校。在此深造先进工程技术与研究方法。"
                />

                <TimelineItem
                    isLeft={true}
                    date="2025.03 - 2025.07"
                    title="SenseTime (商汤科技)"
                    subtitle="大模型评测实习生"
                    description="搭建 AI 合成视频的评测与验收体系；构建 AI 图像编辑工具验收评测体系；负责顶级通用大模型深度评测。"
                />

                <TimelineItem
                    isLeft={false}
                    date="2024.06 - 2024.09"
                    title="中国移动杭州研究院"
                    subtitle="研发实习生"
                    description="参与下肢外骨骼步态运动规划仿真系统开发，负责 IMU 蓝牙数据解析与运动学建模。"
                />

                <TimelineItem
                    isLeft={true}
                    date="2021.09 - 2025.06"
                    title="UESTC (电子科技大学)"
                    subtitle="自动化 (本科)"
                    description="985 高校。在校期间打下了坚实的工科基础，并积极探索跨学科领域。"
                />

            </div>
        </section>
    )
}

export default Experience
