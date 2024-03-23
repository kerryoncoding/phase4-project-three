"""fix name of table from messages to posts

Revision ID: 7d8409bc65b9
Revises: 1a18a8ac2f13
Create Date: 2024-03-18 20:18:08.788695

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7d8409bc65b9'
down_revision = '1a18a8ac2f13'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('squad_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['squad_id'], ['squads.id'], name=op.f('fk_posts_squad_id_squads')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_posts_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_posts'))
    )
    op.drop_table('messages')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('messages',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('body', sa.VARCHAR(), nullable=True),
    sa.Column('squad_id', sa.INTEGER(), nullable=True),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['squad_id'], ['squads.id'], name='fk_messages_squad_id_squads'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_messages_user_id_users'),
    sa.PrimaryKeyConstraint('id', name='pk_messages')
    )
    op.drop_table('posts')
    # ### end Alembic commands ###