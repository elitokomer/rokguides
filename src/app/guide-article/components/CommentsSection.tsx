'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  liked: boolean;
  replies?: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: 'Marcus T.',
    avatar: 'MT',
    time: '2 hours ago',
    content: 'Finally someone who explains WHY Guan Yu is S+ instead of just listing him. The talent build breakdown is exactly what I needed. Just reached KvK season 3 and this completely changed how I approach my march compositions.',
    likes: 14,
    liked: false,
    replies: [
      {
        id: 11,
        author: 'RoKGuides Team',
        avatar: 'RG',
        time: '1 hour ago',
        content: 'Glad it helped! The why behind tier rankings is the most important part. If you want even more depth on Guan Yu talent builds, check our dedicated commander guide.',
        likes: 7,
        liked: false,
      },
    ],
  },
  {
    id: 2,
    author: 'Priya S.',
    avatar: 'PS',
    time: '5 hours ago',
    content: 'Quick question — is Sun Tzu still viable in late KvK or should I be investing in a Legendary by then? I\'m F2P and have Sun Tzu at 5511 right now.',
    likes: 5,
    liked: false,
    replies: [
      {
        id: 21,
        author: 'Kenji H.',
        avatar: 'KH',
        time: '4 hours ago',
        content: 'Sun Tzu stays viable well into mid-KvK as secondary. Once you hit late KvK, start saving for Guan Yu sculptures. The jump in power is massive.',
        likes: 12,
        liked: false,
      },
    ],
  },
  {
    id: 3,
    author: 'Amara O.',
    avatar: 'AO',
    time: '1 day ago',
    content: 'The F2P section is excellent. One thing I\'d add — Joan of Arc\'s rage generation is even more valuable than most guides mention. She effectively lets your primary commander cast skills 20% more often.',
    likes: 31,
    liked: false,
  },
  {
    id: 4,
    author: 'Daniel W.',
    avatar: 'DW',
    time: '2 days ago',
    content: 'Would love to see a dedicated Nevsky talent build guide. The cavalry tree options are confusing — there seem to be multiple viable paths depending on playstyle.',
    likes: 18,
    liked: false,
  },
];

function CommentCard({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) {
  const [liked, setLiked] = useState(comment.liked);
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLike = () => {
    if (!liked) {
      setLikeCount((c) => c + 1);
      setLiked(true);
    } else {
      setLikeCount((c) => c - 1);
      setLiked(false);
    }
  };

  return (
    <div className={`${isReply ? 'ml-8 sm:ml-12 border-l-2 border-border pl-4' : ''}`}>
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0"
          style={comment.author === 'RoKGuides Team' ? { backgroundColor: 'rgba(200,150,90,0.15)', borderColor: 'rgba(200,150,90,0.4)' } : {}}
        >
          {comment.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-sm font-semibold text-foreground">{comment.author}</span>
            {comment.author === 'RoKGuides Team' && (
              <span className="text-xs px-1.5 py-0.5 rounded font-semibold" style={{ backgroundColor: 'rgba(200,150,90,0.15)', color: '#C8965A' }}>
                Staff
              </span>
            )}
            <span className="text-xs text-muted-foreground">{comment.time}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{comment.content}</p>
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs transition-colors duration-200 min-h-[32px] ${
              liked ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={liked ? 'HandThumbUpIcon' : 'HandThumbUpIcon'} size={13} variant={liked ? 'solid' : 'outline'} />
            <span>{likeCount} helpful</span>
          </button>
        </div>
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} isReply />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      author: name.trim(),
      avatar: name.trim().slice(0, 2).toUpperCase(),
      time: 'Just now',
      content: commentText.trim(),
      likes: 0,
      liked: false,
    };

    setComments((prev) => [newComment, ...prev]);
    setName('');
    setCommentText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-12 pt-10 border-t border-border">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <Icon name="ChatBubbleLeftRightIcon" size={22} className="text-primary" />
        Comments
        <span className="text-base font-normal text-muted-foreground">({comments.length})</span>
      </h2>

      {/* Comment Form */}
      <div className="bg-card border border-border rounded-xl p-5 sm:p-6 mb-8">
        <h3 className="text-sm font-semibold text-foreground mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name or IGN"
            className="comment-input w-full px-4 py-3 text-sm"
            required
          />
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts, ask a question, or suggest an improvement..."
            rows={4}
            className="comment-input w-full px-4 py-3 text-sm"
            required
          />
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-xs text-muted-foreground">
              Be helpful and specific. Questions about your specific account are welcome.
            </p>
            <button
              type="submit"
              className="btn-primary min-h-[44px] px-5 py-2.5"
            >
              <Icon name="PaperAirplaneIcon" size={15} />
              Post Comment
            </button>
          </div>
          {submitted && (
            <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-2.5">
              <Icon name="CheckCircleIcon" size={16} />
              Comment posted! Thanks for contributing.
            </div>
          )}
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="pb-6 border-b border-border last:border-b-0">
            <CommentCard comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
}