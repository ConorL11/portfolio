function SkillBubble({children}){
    return (
        <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-300">
            {children}
        </div>
    )
}

export default SkillBubble;